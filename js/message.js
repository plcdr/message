//cookie start
function setCookie(name, value, iDay) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + iDay);
	document.cookie = name + '=' + value + ';expires=' + oDate;
}

function getCookie(name) {
	var arr = document.cookie.split('; ');
	var i = 0;
	for (i = 0; i < arr.length; i++) {
		var arr2 = arr[i].split('=');
		if (arr2[0] == name) {
			return arr2[1];
		}
	}
	return '';
}

function removeCookie(name) {
	setCookie(name, '1', -1);
}
//cookie end
//ajax start
function ajax(url, fnSucc, fnFail) {
	//1.创建ajax对象
	var oAjax = null;
	if (window.XMLHttpRequest) {
		oAjax = new XMLHttpRequest();
	} else {
		oAjax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//2.连接服务器
	//open(方法,url,是否异步)
	oAjax.open('get', url, true);
	//3.发送请求
	oAjax.send();
	//4.接收返回
	oAjax.onreadystatechange = function() {
		if (oAjax.readyState == 4) {
			if (oAjax.status == 200) {
				fnSucc(oAjax.responseText);
			} else {
				if (fnFail) {
					fnFail();
				}
			}
		}
	};
}
//ajax end		
window.onload = function() {
	document.getElementById('mText').focus();
	var oTxt = document.getElementById('mText');
	var oUl = document.getElementById('ul1');
	oTxt.onkeydown = function(ev) {
		var oEvent = ev || event;
		if (oEvent.keyCode == 13) {
			if (oTxt.value != '') {
				var user = getCookie('user');
				var liColor = getCookie('licolor');
				var url = 'message_post.php?act=add&content=' + oTxt.value + '&user=' + user;
				ajax(url, function(str) {
				});
				var oLi = document.createElement('li');
				oLi.style.color = liColor;
				var aLi = oUl.getElementsByTagName('li');
				oLi.innerHTML = user + ': ' + oTxt.value;
				if (aLi.length == 0) {
					oUl.appendChild(oLi);
				} else {
					oUl.insertBefore(oLi, aLi[0]);
				}
				oTxt.value = '';
			} else {
				alert("Please enter the message.");
			}
		}
	};
};
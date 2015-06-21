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
window.onload = function() {
	document.getElementById('userName').focus();
	var userName = document.getElementById('userName');
	document.onkeydown = function(ev) {
		var oEvent = ev || event;
		if (oEvent.keyCode == 13) {
			if (userName.value != '') {
				setCookie('user', userName.value, 30);
				var rand = Math.random();
				var num = Math.round(rand * 10 - 1);
				var arr = ['#000000', '#FF0000', '1e8d6c', '#FF6347',
				'#800000', '#006400', '#2F4F4F', '#DC143C', '#8B008B', '#FF8C00'
				];
				setCookie('licolor', arr[num], 30);
				window.open('http://xinchyi.com/m/message.php', '_self');
			} else {
				alert('Please enter your name.');
			}
		}
	};
};
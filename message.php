<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="js/message.js"></script>
</head>
<body>
	<?php 
		$sql = "SELECT ID, user, content, posttime FROM message ORDER BY ID DESC";
		$con = mysqli_connect('hostname','username','password','your_database');
		$res = mysqli_query($con, $sql);
	?> 
	<ul id="ul1">
		<?php while($row = mysqli_fetch_row($res)){ ?>
			<li><?php echo $row[1],': ', $row[2]; ?></li>
		<?php } ?>
	</ul>
	<div id="footer_text">
		<input type="text" id="mText" >
		<p>按Enter键发送消息</p>
	</div>
</body>
</html>
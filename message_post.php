<?php
switch ($_GET['act']) {
	case 'add':
		$user = $_GET['user'];
		$content = $_GET['content'];
		$t = time();
		$sql = "INSERT INTO message (ID, user, content, posttime) VALUES(0,'{$user}','{$content}',{$t})";
		$con = mysqli_connect('hostname','username','password','your_database');
		mysqli_query($con, $sql);
		break;
	}
?>23.229.154.166
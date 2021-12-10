<?php
/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-10-10 12:39:26
 * @LastEditTime: 2021-10-23 19:08:47
 * @FilePath: \cloudmusic\get_avatar.php
 */
include './conn.php';
$uid = $_GET['uid'];
$get_user_avatar_sql = "SELECT avatar_type, avatar_data FROM user_info WHERE uid = $uid";
$result = mysqli_query($link, $get_user_avatar_sql);
$data = mysqli_fetch_assoc($result);
foreach ($data as $key => $value) {
    $user_avatar[$key] = $value;
}
header("content-type:" . $user_avatar['avatar_type']);
echo $user_avatar['avatar_data'];
mysqli_close($link);

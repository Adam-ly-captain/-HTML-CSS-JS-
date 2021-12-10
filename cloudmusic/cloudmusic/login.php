<?php
/*
 * @Author: your name
 * @Date: 2021-10-07 18:11:20
 * @LastEditTime: 2021-11-24 15:03:46
 * @LastEditors: AdamShyly
 * @Description: In User Settings Edit
 * @FilePath: \cloudmusic\login.php
 */

include './conn.php';
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$login_uid = 0;
$login_info;
$login_status = false;
$user_data_array;
$user_avatar;
$user_data = json_decode($_GET['data'], true); //将JSON转化为关联数组
$get_user_name = $user_data['user_name'];
$get_user_password = $user_data['user_password'];

$get_user_data_sql = "SELECT user_name, user_password FROM user_account_info";
$result = mysqli_query($link, $get_user_data_sql);

$data_row = 0; //获取的数据库数据行数

$user_data_set = mysqli_fetch_all($result);
foreach ($user_data_set as $row => $value) {
    foreach ($value as $column_name => $user_data) {
        $user_data_array[$data_row][$column_name] = $user_data;
    }
    $data_row++;
}
// $get_user_name = $_POST['user_name'];
// $get_user_password = $_POST['user_password'];
for ($i = 0; $i < $data_row; $i++) {
    if ($user_data_array[$i]['0'] == $get_user_name) {
        if ($user_data_array[$i]['1'] == $get_user_password) {
            $login_info = "登录成功";
            $login_uid = $i + 1;
            $login_status = true;
            break;
        }
    }
}
if (!$login_status) {
    $login_info = "账号或密码输入错误!";
    $user_info_array['info'] = $login_info;
} else {
    $get_user_info_sql = "SELECT uid, uname, usex, ubirthday, ulocation, udesc, ucellphone FROM user_info WHERE uid = $login_uid";
    $result = mysqli_query($link, $get_user_info_sql);
    $data = mysqli_fetch_assoc($result); 
    foreach ($data as $key => $value) {
        $user_info_array[$key] = $value;
    }
    $user_info_array['info'] = $login_info;
}
mysqli_close($link);
echo json_encode($user_info_array);

// echo "<script>window.location.href=history.go(-1);</script>";

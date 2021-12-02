<?php
/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-12-01 14:46:05
 * @LastEditTime: 2021-12-01 17:48:50
 * @FilePath: \cloudmusic\getUserStatus.php
 */

include './conn.php';
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/json; charset=UTF-8");

$user_info;
$data = $_GET['uid'];
$select_sql = "SELECT * FROM user_status WHERE uid = $data";
$result = mysqli_query($link, $select_sql);
if ($result) {
    $user_info_data = mysqli_fetch_assoc($result);
    foreach ($user_info_data as $Key => $value) {
        $user_info[$Key] = $value;
    }
    $user_info['info'] = "获取成功";
    echo json_encode($user_info);
} else {
    echo "获取失败";
}
mysqli_close($link);
// echo $data;
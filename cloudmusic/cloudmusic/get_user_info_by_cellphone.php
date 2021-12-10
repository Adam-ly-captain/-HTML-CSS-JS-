<?php
/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-10-23 16:14:02
 * @LastEditTime: 2021-10-23 19:08:36
 * @FilePath: \cloudmusic\get_user_info_by_cellphone.php
 */
include './conn.php';
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/json; charset=UTF-8");

$data = $_GET['data'];
$user_info = json_decode($data, true);
$cellphone = $user_info['cellphone'];

// echo $cellphone;

$search_user_sql = "SELECT uid, uname, usex, ubirthday, ulocation, udesc, ucellphone from user_info where ucellphone = '{$cellphone}'";
$result = mysqli_query($link, $search_user_sql);
if ($result) {
    $data = mysqli_fetch_assoc($result);
    if ($data) {
        foreach ($data as $key => $value) {
            $user_info_select[$key] = $value;
        }
        $user_info_select['info'] = '1';
    } else {
        $user_info_select['info'] = '-1';
    }
}
mysqli_close($link);
echo json_encode($user_info_select);

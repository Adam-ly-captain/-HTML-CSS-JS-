<?php
/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-11-02 02:21:51
 * @LastEditTime: 2021-11-02 14:45:09
 * @FilePath: \cloudmusic\getUserInfoByNickname.php
 */
include './conn.php';
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/json; charset=UTF-8");

$data = $_GET['data'];
$nickname_data = json_decode($data, true);
$nickname = $nickname_data['user_name'];

$select_id_sql = "SELECT id FROM user_account_info WHERE user_name = '{$nickname}'";
$result = mysqli_query($link, $select_id_sql);
if ($result) {
    $user_info1 = mysqli_fetch_assoc($result);
    if ($user_info1) {
        foreach ($user_info1 as $key => $value) {
            $uid = $value;
        }
        // echo $uid;
        $user_uid = intval($uid);
        $select_info_sql = "SELECT uid, uname, usex, ubirthday, ulocation, udesc, ucellphone FROM user_info WHERE uid = $user_uid";
        $result = mysqli_query($link, $select_info_sql);
        if ($result) {
            $user_data = mysqli_fetch_assoc($result);
            if ($user_data) {
                foreach ($user_data as $key => $value) {
                    $user_info[$key] = $value;
                    //  echo $key1;
                }
            }
            $user_info['tip'] = "登录成功";
            echo json_encode($user_info);
        }
    }
}
mysqli_close($link);

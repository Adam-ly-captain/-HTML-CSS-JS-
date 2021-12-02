<?php
/*
* @Author: your name
* @Date: 2021-10-07 12:34:18
 * @LastEditTime: 2021-11-27 20:04:38
 * @LastEditors: AdamShyly
* @Description: In User Settings Edit
 * @FilePath: \cloudmusic\add_user_info.php
*/

include './conn.php';
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/json; charset=UTF-8");

$info;
$isRepetion = false;
$user_data = json_decode($_GET['data'], true);
// echo $user_data['register_method'];
// echo json_encode(is_string($user_data['user_name']));

// $select_name_sql = "SELECT user_name FROM user_account_info WHERE user_name = '" . $user_data['user_name'] . "'";
// echo $select_name_sql;
// echo json_encode($select_name_sql);
$select_name_sql = "SELECT user_name FROM user_account_info WHERE user_name = '{$user_data['user_name']}'";
$result = mysqli_query($link, $select_name_sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
foreach ($data as $key => $values) {
    foreach ($values as $k => $v) {
        // echo $array[$k] = $v;
        if ($user_data['register_method'] == "注册") {
            $info = "该用户名已被注册";
        } else if ($user_data['register_method'] == "手机号注册") {
            $info = "该手机号已被注册";
        }
        $isRepetion = true;
    }
}
// echo json_encode($result);
if (!$isRepetion) {
    $points = 0;
    $online = '0';
    $select_id_sql = "SELECT count(*) AS num FROM user_account_info";
    $result = mysqli_query($link, $select_id_sql);

    $id_num = mysqli_fetch_assoc($result);
    $id = number_format($id_num['num']) + 1;
    // $id += 1;
    // echo $id;

    $user_name = $user_data['user_name'];
    $user_password = $user_data['user_password'];
    $user_default_uname = "用户" . "{$id}";

    $filename = "https://www.lsh0602.xyz/cloudmusic/avatar.png";
    $dafault_avatar = file_get_contents($filename, true);
    $imgProperties = getimagesize($filename);
    $img_suffix = $imgProperties['mime'];   //获取图片后缀
    // $img_data = addslashes($dafault_avatar);
    // header('content-type:image/png');

    $add_user_sql = "INSERT INTO user_account_info VALUES (?, ?, ?)";
    if ($user_data['register_method'] == "手机号注册") {
        $add_user_info_sql = "INSERT INTO user_info (uid, uname, avatar_type, avatar_data, ucellphone) VALUES (?, ?, ?, ?, ?)";
    } else {
        $add_user_info_sql = "INSERT INTO user_info (uid, uname, avatar_type, avatar_data) VALUES (?, ?, ?, ?)";
    }
    $stmt = mysqli_prepare($link, $add_user_sql);
    $stmt1 = mysqli_prepare($link, $add_user_info_sql);

    mysqli_stmt_bind_param($stmt, 'iss', $id, $user_name, $user_password);
    if ($user_data['register_method'] == "手机号注册") {
        mysqli_stmt_bind_param($stmt1, 'issss', $id, $user_default_uname, $img_suffix, $dafault_avatar, $user_name);
    } else {
        mysqli_stmt_bind_param($stmt1, 'isss', $id, $user_default_uname, $img_suffix, $dafault_avatar);
    }
    // if ($user_name && $user_password) {
    $insert_status_sql = "INSERT INTO user_status values (?, ?, ?)";
    $stmt2 = mysqli_prepare($link, $insert_status_sql);
    mysqli_stmt_bind_param($stmt2, 'isi', $id, $online, $points);

    $result = mysqli_stmt_execute($stmt);
    $result1 = mysqli_stmt_execute($stmt1);
    $result2 = mysqli_stmt_execute($stmt2);
    // echo json_encode($result1);
    if ($result && $result1 && $result2) {
        if ($user_data['register_method'] == "注册") {
            $info = "注册成功";
        } else if ($user_data['register_method'] == "手机号注册") {
            $info['tip'] = "手机号注册成功";
            $info['uid'] = $id;
        }
    }
    // mysqli_close($link);

    // if ($result) {
    //     // header("Location:front_page.html");
    // } else {
    //     exit('添加sql语句执行失败。错误信息：' . mysqli_error($link));
    // }
    // } else {
    //     echo "添加学生失败";
    //     // header('Refresh:3; url=front_page.html');
    // }
}
mysqli_close($link);
echo json_encode($info);
// $user_name_array = mysqli_fetch_all($result);
// foreach ($user_name_array as $row => $value) {
//     foreach ($value as $column => $column_value) {
//         if ($user_name_array['user_name'] == $column_value) {
//             $register_repeat = true;
//             break;
//         }
//     }
// }

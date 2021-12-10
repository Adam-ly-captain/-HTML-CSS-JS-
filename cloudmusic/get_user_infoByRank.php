<?php
/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-12-02 19:49:36
 * @LastEditTime: 2021-12-02 20:24:11
 * @FilePath: \cloudmusic\get_user_info.php
 */

include './conn.php';
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/json; charset=UTF-8");

$userInfo;
$getUserInfoByRank_sql = "SELECT * FROM user_status ORDER BY points DESC LIMIT 10";
$result = mysqli_query($link, $getUserInfoByRank_sql);
if ($result) {
    $userInfoData = mysqli_fetch_all($result);
    $userNum = 0;
    $columnNum = 0;
    $isAddNum = false;
    foreach ($userInfoData as $row => $key) {
        foreach ($key as $column => $value) {
            $userInfo[$userNum][$column] = $value;
            if (!$isAddNum) {
                $columnNum++;
            }
        }
        $isAddNum = true;
        $userNum++;
    }
    // echo $userNum;
    for ($i = 0; $i < $userNum; $i++) {
        $getUserInfoByRank_sql = "SELECT uname FROM user_info WHERE uid = {$userInfo[$i][0]}";
        $result = mysqli_query($link, $getUserInfoByRank_sql);
        if ($result) {
            $uname = mysqli_fetch_assoc($result);
            $userInfo[$i][$columnNum] = $uname['uname'];
        }
    }
    echo json_encode($userInfo);
}
mysqli_close($link);

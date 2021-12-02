/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the to
 * @Date: 2021-10-21 11:15:03
 * @LastEditTime: 2021-10-22 21:24:29
 * @FilePath: \cloudmusic\cellphone_info_show.js
 */

function shutUpdateWindow() {
    var update_window = document.getElementById('update_telephone_window');
    update_window.style.display = "none";
    var cellphone = document.getElementById("user_cellphone");
    cellphone.value = '';
    var captcha = document.getElementById("cellphone_captcha");
    captcha.value = '';
    document.getElementById("captcha_error").style.display = "none";
    document.getElementById("cover").style.display = "none";
}

// function showUpdateWindow() {
//     // var update_window = document.getElementById('update_telephone_window');
//     // update_window.style.display = "block";
//     console.log(1);
// }

// function update_cellphone(cellphone) {
//     console.log(1);
// }
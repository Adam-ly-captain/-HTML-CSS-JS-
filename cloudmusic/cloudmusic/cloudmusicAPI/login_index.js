/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-10-22 21:14:18
 * @LastEditTime: 2021-10-23 14:48:59
 * @FilePath: \cloudmusic\cloudmusicAPI\login_index.js
 */
const cellphone_API = require('./user_cellphone_API');
const user_info_API = require('./get_user_info_API');
const axios = require('npm/node_modules/axios');
axios.default.defaults.withCredentials = true;
axios.default.defaults.baseURL = "http://localhost:4000";

var cellphone_exist;
var preCellphone;
var getCaptcha = document.getElementById("getCaptcha");
getCaptcha.onclick = function () {
    // console.log(1);
    var cellphone = document.getElementById("user_cellphone");
    if (isTelephone(cellphone.value)) {
        // console.log(cellphone.value);
        var cellphone_status = cellphone_API.checkCellphone(cellphone.value, axios);
        cellphone_status.then(res => {
            cellphone_exist = res;
            // console.log(cellphone_exist);
            if (cellphone_exist == '1') {
                preCellphone = cellphone.value;
                cellphone_API.telephoneVerificationCode(cellphone.value, axios);
            } else {
                alert("手机号不存在或未注册");
            }
        })
    } else {
        cellphone.value = '';
        alert("请输入正确的手机号");
        // document.getElementById("captcha_error").style.display = "block";
    }
}

var login = document.getElementById("user_login_telephone_form");
login.onsubmit = function () {
    var cellphone = document.getElementById("user_cellphone").value;
    var captcha = document.getElementById("cellphone_captcha").value;
    if (cellphone == preCellphone) {
        var token = user_info_API.loginByPhone(cellphone, captcha);
    } else {
        alert("请输入之前获取验证码的手机号");
    }
    return false;
}

function isTelephone(telephone) {
    if (telephone.length == 11) {
        var status = /^\d+$/.test(telephone);
        // console.log(status);
        return status;
    }
    return false;
}

function isAllNumber(value) {
    var status = /^\d+$/.test(value);
    return status;
}
/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-10-13 16:38:13
 * @LastEditTime: 2021-10-31 15:06:02
 * @FilePath: \cloudmusic\cloudmusicAPI\user_cellphone_API.js
 */
// import http from 'http';
// const fetch = require("D:\\nodejs\\node_modules\\npm\\node_modules\\node-fetch-npm");
// import("D:\\nodejs\\node_modules\\npm\\node_modules\\node-fetch");
// require('npm/node_modules/axios/index.js');

// import axios from 'npm/node_modules/axios';
// const axios = require('npm/node_modules/axios'); //宏常量只能赋值定义一次
// axios.default.defaults.withCredentials = true;
// axios.default.defaults.baseURL = "http://localhost:4000";
// checkCellphone("18350803960");
// telephoneVerificationCode(13960561518);

// var user_cellphone_API = {
//     captcha: function telephoneVerificationCode(telephone, axios)
// }

async function telephoneRegister(telephone, password) {
    // register_send_data(telephone, password);


}
exports.telephoneVerificationCode =
    async function (telephone, axios) {
        const res = await axios({
            url: '/captcha/sent',
            method: 'post',
            data: {
                phone: telephone
            }
        })
    }
exports.checkCellphone =
    async function (telephone, axios) {
        const res = await axios({
            url: '/cellphone/existence/check', //要用小写url
            method: 'post',
            data: {
                phone: telephone
            },
        })
        console.log(res);
        return res.data.exist;
    }

exports.checkCaptcha =
    async function (telephone, cellphone_captcha, axios) {
        try {
            const res = await axios({
                url: '/captcha/verify',
                method: 'post',
                data: {
                    phone: telephone,
                    captcha: cellphone_captcha
                }
            })
        } catch (err) {
            console.log("验证码错误");
            return '-1';
        }
        return '1';
    }

exports.rebindCellphone =
    async function (phone, oldcaptcha, captcha, axios) {
        const res = await axios({
            url: '/rebind',
            method: 'post',
            data: {
                phone: phone,
                oldcaptcha: oldcaptcha,
                captcha: captcha,
            }
        })
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
// console.log("success");
// const {
//     login_cellphone,
//     user_cloud
// } = require('D:\\nodejs\\node_modules\\npm\\node_modules\\NeteaseCloudMusicApi');
// console.log(1);
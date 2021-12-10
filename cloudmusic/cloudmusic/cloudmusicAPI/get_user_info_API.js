/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-10-17 20:19:09
 * @LastEditTime: 2021-10-23 15:08:50
 * @FilePath: \cloudmusic\cloudmusicAPI\get_user_info_API.js
 */
// const axios = require('npm/node_modules/axios');
// axios.default.defaults.withCredentials = true;
// axios.default.defaults.baseURL = "http://localhost:4000";

// get_user_info_by_UID(1314371987);

async function get_user_info_by_UID(Uid) {
    const res = await axios({
        url: '/user/detail',
        method: 'post',
        data: {
            uid: '1'
        }
    })
    console.log(res.data.userPoint.userId);
}

exports.loginByPhone = 
    async function (phone, captcha, axios) {
        const res = await axios({
            url: '/login/cellphone',
            method: 'post',
            data: {
                phone: phone,
                captcha : captcha
            }
        })
        console.log(res.data.cookie);
        return res.data.cookie;
    }

exports.loginStatus = 
    async function (cookieToken) {
        const res = await axios ({
            url: '/login/status',
            method: 'post',
            data: {
                cookie: cookieToken
            }
        })
        console.log(res);
    }
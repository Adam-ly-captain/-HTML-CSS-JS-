/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-10-24 11:52:20
 * @LastEditTime: 2021-11-03 03:12:40
 * @FilePath: \cloudmusic\get_qrimg.js
 */
// var img_qr = document.getElementById("get_qrimg");

var officialUid;
var nickname;

axios.default.defaults.withCredentials = true;
axios.default.defaults.baseURL = "http://localhost:4000";

async function checkStatus(key) {
    const res = await axios({
        url: `/login/qr/check?key=${key}&timerstamp=${Date.now()}`,
    });
    // console.log(res.data);
    return res.data;
}

async function getLoginStatus(cookieToken) {
    const res = await axios({
        url: `/login/status?timerstamp=${Date.now()}&cookie=${cookieToken}`,
    });
    // console.log(res);
    // console.log(res.data)
    officialUid = res.data.data.account.id;
    window.localStorage.setItem("userId", officialUid);
    nickname_data = getUserNiceName();
    nickname_data.then(res => {
        nickname = res;
        // console.log(nickname);
        registerByNickname(nickname);
    })
}

function registerByNickname(nickname) {
    var xmlhttp = new XMLHttpRequest();
    var params = {
        "user_name": nickname,
        "user_password": '123456',
        "register_method": '注册'
    };
    var data = JSON.stringify(params);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // console.log(this.responseText);
            var info = JSON.parse(this.responseText);
            console.log(info);
            // if (info == "注册成功") {
            //     // alert(info);
            // }
            getUserInfoByNickname(nickname);
        }
    }
    xmlhttp.open('GET', 'http://localhost:3000/add_user_info.php?data=' + data, true);
    xmlhttp.send();
}

function getUserInfoByNickname(nickname) {
    var xmlhttp = new XMLHttpRequest();
    var params = {
        "user_name": nickname
    };
    var data = JSON.stringify(params);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(this.responseText);
            var info = JSON.parse(this.responseText);
            // console.log(info);
            if (info['tip'] == "登录成功") {
                var user_data = JSON.stringify(info);
                window.localStorage.setItem("nowUser_Uid", info['uid']);
                window.localStorage.setItem("user" + info['uid'], user_data);
                location.reload();
            }
        }
    }
    xmlhttp.open('GET', 'http://localhost:3000/getUserInfoByNickname.php?data=' + data, true);
    xmlhttp.send();
}

async function login() {
    document.getElementById("login_input_cellphone").style.display = "none";
    document.getElementById("qrimg").style.display = "block";
    document.getElementById("get_qrimg").style.display = "none";
    document.getElementById("cellphone_tip").innerHTML = "二维码登录";
    document.getElementById("back_cellphone_register").style.display = "block";
    // let timestamp = Date.now()
    // getLoginStatus();
    const res = await axios({
        url: `/login/qr/key?timerstamp=${Date.now()}`,
    });

    const key = res.data.data.unikey;
    const res2 = await axios({
        url: `/login/qr/create?key=${key}&qrimg=true&timerstamp=${Date.now()}`,
    });

    document.querySelector('#qrimg').src = res2.data.data.qrimg;

    let timer = setInterval(async () => {
        const statusRes = await checkStatus(key);
        if (statusRes.code === 800) {
            alert('二维码已过期,请重新获取');
            clearInterval(timer);
        }
        if (statusRes.code === 803) {
            clearInterval(timer);
            alert('授权登录成功');
            window.localStorage.setItem("cookie", JSON.stringify(statusRes.cookie));
            await getLoginStatus(statusRes.cookie);
            document.getElementById("login_telephone_window").style.display = "none";
            document.getElementById("cover_background").style.display = "none";
        }
    }, 3000);
}
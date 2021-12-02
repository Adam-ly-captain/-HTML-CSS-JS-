/*
 * @Author: your name
 * @Date: 2021-10-08 11:44:03
 * @LastEditTime: 2021-10-24 13:48:03
 * @LastEditors: AdamShyly
 * @Description: In User Settings Edit
 * @FilePath: \cloudmusic\exchange_data.js
 */

// var xmlhttp = new XMLHttpRequest();

// xmlhttp.onreadystatechange = function () {
//     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//         // console.log(xmlhttp.responseText);
// var info = JSON.parse(xmlhttp.responseText);
// document.getElementById("demo1").innerHTML = info;

//     }
// }

// xmlhttp.open('GET', 'http://localhost:3000/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90/login.php', true);
// xmlhttp.send();
var uid;
var status;
// const axios = require('npm/node_modules/axios');
// axios.default.defaults.withCredentials = true;
// axios.default.defaults.baseURL = "http://localhost:4000";

// document.getElementById("right_page").style.display = "none";

function login_send_data() {
    var user_name = document.getElementById("user_name");
    var user_password = document.getElementById("user_password");
    var login_info = {
        "user_name": user_name.value,
        "user_password": user_password.value
    }; //获取用户名和密码
    var dbParam = JSON.stringify(login_info);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xmlhttp.responseText);
            var info_array = JSON.parse(xmlhttp.responseText);
            if (info_array['info'] == "登录成功") {
                alert(info_array['info']);
                // for (var info in info_array) {
                //     localStorage.setItem(info, info_array[info]);
                // }
                // document.getElementById("user_uid").innerHTML = info_array['uid'];
                // for (var i in info_array) {
                //     console.log(i + ":" + info_array[i]);
                // }
                var user_data = JSON.stringify(info_array);
                window.localStorage.setItem("user" + info_array['uid'], user_data);
                window.localStorage.setItem("nowUser_Uid", info_array['uid']);
                // console.log(window.localStorage);
                // window.localStorage.setItem
                document.getElementById("login_window").style.display = "none";
                document.getElementById("cover_background").style.display = "none";
                var avatar = document.getElementById("user_avatar");
                avatar.src = "http://localhost:3000/get_avatar.php?uid=" + info_array['uid'];
                avatar.style.visibility = "visible";
                // document.getElementById("user_info_link").href = "http://localhost:3000/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90/user_info.php?uid=" + info_array['uid'];
                uid = info_array['uid'];
                document.getElementById("login").style.display = "none";
            } else if (info_array['info'] == "账号或密码输入错误!") {
                document.getElementById("login_info_tip").innerHTML = info_array['info'];
                var login_input_name = document.getElementById("user_name");
                login_input_name.focus();
            }
            user_name.value = '';
            user_password.value = '';
        }
    }
    xmlhttp.open('GET', 'http://localhost:3000/login.php?data=' + dbParam, true);
    xmlhttp.send();
}

function register_send_data(name, password, method) {
    var register_user_name = name;
    var register_user_password = password;
    var register_user_name = document.getElementById("register_user_name");
    var register_user_password = document.getElementById("register_user_password");
    var telephone = document.getElementById("register_user_telephone");
    var telephone_password = document.getElementById("register_user_telephone_password");
    var register_info = {
        "user_name": name,
        "user_password": password,
        "register_method": method
    }
    // console.log(register_info);
    var dbParam = JSON.stringify(register_info);
    var xmlhttp1 = new XMLHttpRequest();
    xmlhttp1.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xmlhttp1.responseText);
            var info = JSON.parse(xmlhttp1.responseText);
            // console.log(info);
            if (info == "注册成功") {
                alert(info);
                document.getElementById("register_window").style.display = "none";
                document.getElementById("cover_background").style.display = "none";
            } else if (info['tip'] == "手机号注册成功") {
                if (register_info['register_method']) {
                  updateCellphone(register_info['user_name'], info['uid']);
                //   console.log(status);
                  if (status) {
                    alert(info['tip']);
                    document.getElementById("telephone_register_window").style.display = "none";
                    document.getElementById("cover_background").style.display = "none";
                  } else {
                    document.getElementById("telephone_register_info_tip").innerHTML = "注册失败";
                    telephone.focus();
                  }
                }
            } else if (info == "该用户名已被注册") {
                document.getElementById("register_info_tip").innerHTML = info;
                // var register_name = document.getElementById("register_user_name");
                register_user_name.focus();
            } else if (info == "该手机号已被注册") {
                document.getElementById("telephone_register_info_tip").innerHTML = info;
                telephone.focus();
            }
            register_user_name.value = '';
            register_user_password.value = '';
            telephone.value = '';
            telephone_password.value = '';
        }
    }
    xmlhttp1.open('GET', 'http://localhost:3000/add_user_info.php?data=' + dbParam, true);
    xmlhttp1.send();
}

function updateCellphone(cellphone, uid) {
    var user_info = {
        user_uid: uid,
        user_cellphone: cellphone
    };
    var params = JSON.stringify(user_info);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var info = JSON.parse(this.responseText);
            // console.log(info);
            if (info == "更改成功") {
                status = true;
            } else {
                status = false;
            }
        }
    }
    xmlhttp.open('GET', 'http://localhost:3000/update_cellphone.php?cellphone=' + params, true);
    xmlhttp.send();
}
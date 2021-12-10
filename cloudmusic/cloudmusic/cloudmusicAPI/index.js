/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-10-18 02:46:21
 * @LastEditTime: 2021-10-22 21:13:54
 * @FilePath: \cloudmusic\cloudmusicAPI\index.js
 */
const cellphone_API = require('./user_cellphone_API');
const user_info_API = require('./get_user_info_API');
var cellphone_status;
var cellphone_exist;
var preLeft;
var preTop;
var showStatus = false;
const axios = require('npm/node_modules/axios'); //宏常量只能赋值定义一次
axios.default.defaults.withCredentials = true;
axios.default.defaults.baseURL = "http://localhost:4000";

var telephone_button = document.getElementById("update_telephone_button");
var cellphone = document.getElementById("user_telephone_info").innerHTML;
telephone_button.onclick = function () {
  // console.log(cellphone);
  cellphone_status = cellphone_API.checkCellphone(cellphone, axios);
  // console.log(cellphone_status);
  cellphone_status.then(res => {
    // console.log(res);
    cellphone_exist = res;
    if (cellphone_exist == '1') {
      document.getElementById("cellphone_button").value = '解绑';
    } else if (cellphone_exist == '-1') {
      document.getElementById("cellphone_button").value = '绑定';
    }
    // console.log(cellphone_exist);
  })
  var update_window = document.getElementById('update_telephone_window');
  update_window.style.display = "block";
  if (!showStatus) {
    preLeft = update_window.style.left;
    preTop = update_window.style.top;
  } else {
    update_window.style.left = preLeft;
    update_window.style.top = preTop;
  }
  showStatus = true;
}
// console.log(cellphone_exist);
// update_telephone.onsubmit = function() {
//     cellphone_API.checkCellphone(,axios);   
// }

const cellphone_API = require('./user_cellphone_API');
// const user_info_API = require('./get_user_info_API');
var cellphone_status;
var cellphone_exist;
var preLeft;
var preTop;
var showStatus = false;
var cellphone;
const axios = require('npm/node_modules/axios'); //宏常量只能赋值定义一次
axios.default.defaults.withCredentials = true;
axios.default.defaults.baseURL = "http://localhost:4000";

var telephone_button = document.getElementById("update_telephone_button");
telephone_button.onclick = function () {
  cellphone = document.getElementById("user_telephone_info").innerHTML;
  // console.log(cellphone);
  cellphone_status = cellphone_API.checkCellphone(cellphone, axios);
  // console.log(cellphone_status);
  cellphone_status.then(res => {
    console.log(res);
    cellphone_exist = res;
  })
  var update_window = document.getElementById('update_telephone_window');
  update_window.style.display = "block";
  if (!showStatus) {
    preLeft = update_window.style.left;
    preTop = update_window.style.top;
  } else {
    update_window.style.left = preLeft;
    update_window.style.top = preTop;
  }
  showStatus = true;
}
// console.log(cellphone_exist);
// update_telephone.onsubmit = function() {
//     cellphone_API.checkCellphone(,axios);   
// }

var captcha = document.getElementById("getCaptcha");
captcha.onclick = function () {
  var cellphone = document.getElementById("user_cellphone").value;
  // console.log(cellphone);
  if (isTelephone(cellphone)) { //要传入字符串
    // console.log(1);
    cellphone_API.telephoneVerificationCode(cellphone, axios);
  } else {
    //请输入正确的手机号
    alert("请输入正确的手机号");
  }
}

var bind;
var update_telephone = document.getElementById("user_update_telephone_form");
update_telephone.onsubmit = function () {
  var cellphone = document.getElementById("user_cellphone").value;
  var captcha = document.getElementById("cellphone_captcha").value;
  // console.log(captcha);
  var bindStatus = cellphone_API.checkCaptcha(cellphone, captcha, axios);
  bindStatus.then(res => {
    bind = res;
    // console.log(bind);
    if (bind == '1') { //验证码正确
      console.log(1);
      if (cellphone_exist == '1') { //手机号已被注册过
        update_cellphone('');
        // console.log(cellphone);
      } else if (cellphone_exist == '-1') {
        update_cellphone(cellphone);
      }
    } else {
      document.getElementById("captcha_error").style.display = "block";
      var cellphone = document.getElementById("user_cellphone");
      cellphone.value = '';
      var captcha = document.getElementById("cellphone_captcha");
      captcha.value = '';
      cellphone.focus();
    }
  })
  return false;
}


async function update_cellphone(cellphone) {
  var uid = localStorage.getItem("nowUser_Uid");
  var user_info = {
    user_uid: uid,
    user_cellphone: cellphone
  };
  var params = JSON.stringify(user_info);
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      var info = JSON.parse(this.responseText);
      alert(info);
      var update_window = document.getElementById('update_telephone_window');
      update_window.style.display = "none";
      update_window.style.left = preLeft;
      update_window.style.top = preTop;
      var cellphone = document.getElementById("user_cellphone");
      cellphone.value = '';
      var captcha = document.getElementById("cellphone_captcha");
      captcha.value = '';
      document.getElementById("captcha_error").style.display = "none";
    }
  }
  xmlhttp.open('GET', 'http://localhost:3000/update_cellphone.php?cellphone=' + params, true);
  xmlhttp.send();
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
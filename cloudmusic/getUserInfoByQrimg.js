/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-10-31 11:44:50
 * @LastEditTime: 2021-11-02 02:12:00
 * @FilePath: \cloudmusic\getUserInfoByQrimg.js
 */

// async function getUserBindInfo() {
    // const res = await axios({
    //     withCredentials: false,
    //     url: `http://localhost:4000/user/binding?uid=` + officialUid,
    // })
    // console.log(JSON.parse(res.data.bindings['0'].tokenJsonStr)['cellphone']);
    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         console.log(this.responseText)
    //         var user_cellphone = JSON.parse(JSON.parse(this.responseText).bindings['0'].tokenJsonStr).cellphone;
    //         console.log(user_cellphone)
    //     }
    // }
    // xmlhttp.open('GET', "http://localhost:4000/user/binding?uid=1314371987", true)
    // xmlhttp.send();
// }
// getUserBindInfo();

async function getUserNiceName() {
    const res = await axios({
        url: '/user/detail',
        method: 'post',
        data: {
            uid: officialUid
        }
    })
    return res.data.profile.nickname;
}
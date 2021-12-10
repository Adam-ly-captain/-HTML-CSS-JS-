/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-10-10 15:00:42
 * @LastEditTime: 2021-12-03 02:40:12
 * @FilePath: \cloudmusic\get_user_info.js
 */
var uid;
var is_leap_year;
var year;
var area = {
    "直辖市": "北京市 天津市 上海市 重庆市",
    "特别行政区": "香港 澳门",
    "河北省": "石家庄市 唐山市 秦皇岛市 邯郸市 邢台市 保定市 张家口市 承德市 沧州市 廊坊市 衡水市",
    "山西省": "太原市 大同市 阳泉市 长治市 晋城市 朔州市 晋中市 运城市 忻州市 临汾市 吕梁市",
    "内蒙古": "呼和浩特市 包头市 乌海市 赤峰市 通辽市 鄂尔多斯市 呼伦贝尔市 巴彦淖尔市 乌兰察布市 兴安盟 锡林郭勒盟 阿拉善盟",
    "辽宁省": "沈阳市 大连市 鞍山市 抚顺市 本溪市 丹东市 锦州市 营口市 阜新市 辽阳市 盘锦市 铁岭市 朝阳市 葫芦岛市",
    "吉林省": "长春市 吉林市 四平市 辽源市 通化市 白山市 松原市 白城市 延边朝鲜族自",
    "黑龙江省": "哈尔滨市 齐齐哈尔市 鸡西市 鹤岗市 双鸭山市 大庆市 伊春市 佳木斯市 七台河市 牡丹江市 黑河市 绥化市 大兴安岭地区",
    "江苏省": "南京市 无锡市 徐州市 常州市 苏州市 南通市 连云港市 淮安市 盐城市 扬州市 镇江市 泰州市 宿迁市",
    "浙江省": "杭州市 宁波市 温州市 嘉兴市 湖州市 绍兴市 金华市 衢州市 舟山市 台州市 丽水市",
    "安徽省": "合肥市 芜湖市 蚌埠市 淮南市 马鞍山市 淮北市 铜陵市 安庆市 黄山市 滁州市 阜阳市 宿州市 六安市 亳州市 池州市 宣城市",
    "福建省": "福州市 厦门市 莆田市 三明市 泉州市 漳州市 南平市 龙岩市 宁德市",
    "江西省": "南昌市 景德镇市 萍乡市 九江市 新余市 鹰潭市 赣州市 吉安市 宜春市 抚州市 上饶市",
    "山东省": "济南市 青岛市 淄博市 枣庄市 东营市 烟台市 潍坊市 济宁市 泰安市 威海市 日照市 莱芜市 临沂市 德州市 聊城市 滨州市 菏泽市",
    "河南省": "郑州市 开封市 洛阳市 平顶山市 安阳市 鹤壁市 新乡市 焦作市 濮阳市 许昌市 漯河市 三门峡市 南阳市 商丘市 信阳市 周口市 驻马店市 济源市",
    "湖北省": "武汉市 黄石市 十堰市 宜昌市 襄阳市 鄂州市 荆门市 孝感市 荆州市 黄冈市 咸宁市 随州市 恩施土家族苗族自治州 仙桃市 潜江市 天门市 神农架林区",
    "湖南省": "长沙市 株洲市 湘潭市 衡阳市 邵阳市 岳阳市 常德市 张家界市 益阳市 郴州市 永州市 怀化市 娄底市 湘西土家族苗自治州",
    "广东省": "广州市 韶关市 深圳市 珠海市 汕头市 佛山市 江门市 湛江市 茂名市 肇庆市 惠州市 梅州市 汕尾市 河源市 阳江市 清远市 东莞市 中山市 潮州市 揭阳市 云浮市",
    "广西": "南宁市 柳州市 桂林市 梧州市 北海市 防城港市 钦州市 贵港市 玉林市 百色市 贺州市 河池市 来宾市 崇左市",
    "河南省": "海口市 三亚市 三沙市 儋州市 五指山市 琼海市 文昌市 万宁市 东方市 定安县 屯昌县 澄迈县 临高县 白沙黎族自治县 昌江黎族自治县 乐东黎族自治县 陵水黎族自治县 保亭黎族苗族自治县 琼中黎族苗族自治县",
    "四川省": "成都市 自贡市 攀枝花市 泸州市 德阳市 绵阳市 广元市 遂宁市 内江市 乐山市 南充市 眉山市 宜宾市 广安市 达州市 雅安市 巴中市 资阳市 阿坝藏族羌族自治州 甘孜藏族自治州 凉山彝族自治州",
    "贵州省": "贵阳市 六盘水市 遵义市 安顺市 毕节市 铜仁市 黔西南布依族苗族自治州 黔东南苗族侗族自治州 黔南布依族苗族自治州",
    "云南省": "昆明市 曲靖市 玉溪市 保山市 昭通市 丽江市 普洱市 临沧市 楚雄彝族自治州 红河哈尼族彝族自治州 文山壮族苗族自治州 西双版纳傣族自治州 大理白族自治州 德宏傣族景颇族自治州 怒江傈僳族自治州 迪庆藏族自治州",
    "西藏": "拉萨市 日喀则市 昌都市 林芝市 山南市 那曲市 阿里地区",
    "陕西省": "西安市 铜川市 宝鸡市 咸阳市 渭南市 延安市 汉中市 榆林市 安康市 商洛市",
    "甘肃省": "兰州市 嘉峪关市 金昌市 白银市 天水市 武威市 张掖市 平凉市 酒泉市 庆阳市 定西市 陇南市 临夏回族自治州 甘南藏族自治州",
    "青海省": "西宁市 海东市 海北藏族自治州 黄南藏族自治州 海南藏族自治州 果洛藏族自治州 玉树藏族自治州 海西蒙古族藏族自治州",
    "宁夏": "银川市 石嘴山市 吴忠市 固原市 中卫市",
    "新疆": "乌鲁木齐市 克拉玛依市 吐鲁番市 哈密市 昌吉回族自治州 博尔塔拉蒙古自治州 巴音郭楞蒙古自治州 阿克苏地区 克孜勒苏柯尔克孜自治州 喀什地区 和田地区",
    "台湾省": "台北市 高雄市 基隆市 台中市 台南市 新竹市 嘉义市 台北县 宜兰县 桃园县 新竹县 苗栗县 台中县 彰化县 南投县 云林县 嘉义县 台南县 高雄县 屏东县 澎湖县 台东县 花莲县",
    "海外": "阿尔及利亚 阿根廷 阿联酋 埃及 爱尔兰 奥地利 澳大利亚 巴哈马 巴基斯坦 巴西 白俄罗斯 比利时 冰岛 波兰 玻利维亚 伯利兹 朝鲜 丹麦 德国 俄罗斯 厄瓜多尔 法国 菲律宾 芬兰 哥伦比亚 古巴 关岛 哈萨克斯坦 韩国 荷兰 加拿大 加纳 柬埔寨 捷克 卡塔尔 科威特 克罗地亚 肯尼亚 老挝 卢森堡 罗马尼亚 马尔代夫 马来西亚 美国 蒙古 孟加拉 秘鲁 缅甸 摩洛哥 墨西哥 南非 尼日利亚 挪威 葡萄牙 日本 瑞典 瑞士 沙特阿拉伯 斯里兰卡 苏丹 泰国 坦桑尼亚 土耳其 委内瑞拉 乌克兰 西班牙 希腊 新加坡 新西兰 匈牙利 伊拉克 伊朗 以色列 意大利 印度 印度尼西亚 英国 越南 智利 其他"
}

window.onload = function () {
    var bodyWidth = setBodyWidth() + "px";
    document.body.style.width = bodyWidth;
    console.log(window.localStorage);
    uid = window.localStorage.getItem("nowUser_Uid");
    user_info = JSON.parse(window.localStorage.getItem("user" + uid));
    // console.log(user_info);
    document.getElementById("user_uid").innerHTML = "Uid : " + user_info['uid'];
    document.getElementById("user_avatar").src = "http://localhost:3000/get_avatar.php?uid=" + user_info['uid'];
    var date = new Date();
    isLeapYear(date.getFullYear());
    document.getElementById("now_year").innerText = date.getFullYear();
    var year_list = document.getElementById("year");
    for (var i = 1; i <= 100; i++) {
        var options = document.createElement("option");
        options.value = year - i;
        // console.log(options.value);
        options.innerText = year - i;
        year_list.appendChild(options);
    }
    if (user_info['ubirthday']) {
        //获取用户生日
        var ubirthday = user_info['ubirthday'].split('-');
        // console.log(ubirthday);
        document.getElementById("year").value = ubirthday[0];
        document.getElementById("month").value = ubirthday[1];
        document.getElementById("day").value = ubirthday[2];
    }
    document.getElementById("user_name").value = user_info['uname'];
    if (user_info['ulocation']) {
        //获取用户住址
        var ulocation = user_info['ulocation'].split(' ');
        document.getElementById("location").value = ulocation[0];
        document.getElementById("area").value = ulocation[1];
    }
    select_area();
    if (user_info['usex']) {
        if (user_info['usex'] == '男') {
            var sex = document.getElementById("man");
            sex.checked = true;
        } else {
            var sex = document.getElementById("woman");
            sex.checked = true;
        }
    }
    if (user_info['udesc']) {
        document.getElementById("user_description").value = user_info['udesc'];
    }
    if (user_info['ucellphone']) {
        document.getElementById("user_telephone_info").innerHTML = user_info['ucellphone'];
        document.getElementById("user_telephone_info").style.marginTop = '3px';
        document.getElementById("cellphone_button").value = '解绑';
    } else {
        document.getElementById("user_telephone_info").innerHTML = '无';
        document.getElementById("user_telephone_info").style.marginTop = '0px';
        document.getElementById("cellphone_button").value = '绑定';
    }
    calculate_words();
}

function get_area(province) {
    var city = area[province].split(" ");
    var city_list = document.getElementById("area");
    for (var i in city) {
        // console.log(str[i]);
        var option = document.createElement("option");
        option.value = city[i];
        option.innerText = city[i];
        city_list.appendChild(option);
    }
}

function select_area() {
    var province = document.getElementById("location");
    var area = document.getElementById("area");
    area.innerHTML = '';
    get_area(province.value);
}

function isLeapYear(value) {
    // console.log(value);
    year = value;
    if ((value % 4 == 0 && value % 100 != 0) || (value % 100 == 0 && value % 400 == 0)) {
        // is_leap_year = false;
        return false;
    } else {
        return true;
        // is_leap_year = true;
    }
}

function calculate_days(value) {
    // console.log(year);
    document.getElementById("day_01").selected = true;
    document.getElementById("day_29").style.display = "block";
    document.getElementById("day_30").style.display = "block";
    document.getElementById("day_31").style.display = "block";
    switch (value) {
        case '04':
        case '06':
        case '09':
        case '11':
            document.getElementById("day_31").style.display = "none";
            break;
        case '02':
            if (isLeapYear(year)) {
                document.getElementById("day_29").style.display = "none";
            }
            document.getElementById("day_30").style.display = "none";
            document.getElementById("day_31").style.display = "none";
            break;
    }
}

function calculate_words() {
    var words = document.getElementById("user_description").value;
    if (words != '') {
        document.getElementById("count_words").innerHTML = 50 - words.length;
    } else {
        document.getElementById("count_words").innerHTML = '';
    }
    if (words.length == 50) {
        document.getElementById("count_words").style.color = "red";
    } else if (words.length > 50) {
        document.getElementById("count_words").style.color = "red";
        document.getElementById("count_words").innerHTML = '0';
    } else {
        document.getElementById("count_words").style.color = "rgb(211, 208, 211)";
    }
    // console.log(1);
}

function isNotAJAX() {
    send_data();
    return false;
}

function send_data() {
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var ubirthday = year + "-" + month + "-" + day;
    var usex = '';
    if (document.getElementById("man").checked) {
        usex = "男";
    } else if (document.getElementById("woman").checked) {
        usex = "女";
    }
    // console.log(usex);
    var udesc = document.getElementById("user_description").value;
    var province = document.getElementById("location").value;
    var city = document.getElementById("area").value;
    var ulocation = province + " " + city;
    var uname = document.getElementById("user_name").value;
    // var uid = document.getElementById("user_uid").innerHTML;
    var userPreInfo = JSON.parse(window.localStorage.getItem("user" + uid));
    var user_new_info = {
        "uid": uid,
        "uname": uname,
        "usex": usex,
        "udesc": udesc,
        "ubirthday": ubirthday,
        "ulocation": ulocation,
        "ucellphone": userPreInfo['ucellphone']
    }
    var params = JSON.stringify(user_new_info);
    console.log(params);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var info = JSON.parse(this.responseText);
            alert(info);
            if (info == "更改信息成功") {
                window.localStorage.setItem("user" + uid, params);
            }
        }
    }
    xmlhttp.open('GET', 'http://localhost:3000/update_user_info.php?user_info=' + params, true);
    xmlhttp.send()
}

function sign_out_user_info() {
    window.localStorage.removeItem("nowUser_Uid");
    window.localStorage.removeItem("cookie");
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("userStatus");
    updateUserStatus("0", '');
    // location.href("")
    window.open("./front_page.html", "_self");
}

function updateUserStatus(online, points) {
    if (!points) {
        points = '';
    }
    var uid = localStorage.getItem("nowUser_Uid");
    var params = {
        uid: uid,
        online: online,
        points: points,
        signIn: '',
        lastSignInTime: '',
        lastLoginTime: ''
    }
    data = JSON.stringify(params);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var info = JSON.parse(this.responseText);
            console.log(info);
        }
    }
    xmlhttp.open('GET', 'http://localhost:3000/upateStatus.php?data=' + data, true);
    xmlhttp.send();
}

function updateTelephone() {
    var telephone = document.getElementById("user_telephone_info").innerHTML;
    // console.log(telephone);
    checkCellphone(telephone);
}

function setBodyWidth() {
    var barWidthHelper = document.createElement('div');
    barWidthHelper.style.cssText = "overflow:scroll; width:100px; height:100px;";
    document.body.appendChild(barWidthHelper);
    var barWidth = barWidthHelper.offsetWidth - barWidthHelper.clientWidth;
    document.body.removeChild(barWidthHelper);
    var bodyWidth = window.screen.availWidth - barWidth;
    return bodyWidth;
}
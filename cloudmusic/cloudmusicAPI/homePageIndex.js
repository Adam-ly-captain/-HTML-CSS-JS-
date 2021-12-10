/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-10-31 15:06:53
 * @LastEditTime: 2021-10-31 15:06:53
 * @FilePath: \cloudmusic\cloudmusicAPI\homePageIndex.js
 */

const homePageAPI = require("./get_first_page_API");
const axios = require('npm/node_modules/axios');
axios.default.defaults.withCredentials = true;
axios.default.defaults.baseURL = "http://localhost:4000";
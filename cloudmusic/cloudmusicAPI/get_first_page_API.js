/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-10-31 15:03:31
 * @LastEditTime: 2021-10-31 15:06:18
 * @FilePath: \cloudmusic\cloudmusicAPI\get_first_page_API.js
 */

exports.getFirstPageInfo =
    async function (axios) {
        const res = await axios({
            url: '/homepage/block/page',
        })
        console.log(res);
    }

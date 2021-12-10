/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-10-18 14:27:50
 * @LastEditTime: 2021-10-18 15:13:19
 * @FilePath: \cloudmusic\dist\buble.js
 */
var array = [98, 31, 5, 27, 2, 78];
var temp;
for (var i = array.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) {
            temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}
for (var i in array) {
    console.log(array[i]);
}

var n = 10;
var m = 3;
var array = new Array(n);
for (var i = 0; i < n; ) {
    for (var j = 0; j < n - i;) {
        
    }
}
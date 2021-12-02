(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-10-17 15:57:28
 * @LastEditTime: 2021-10-17 16:00:50
 * @FilePath: \cloudmusic\test\index.js
 */
let module1 = require('./module1');
let module2 = require('./module2');

module1.foo1();
module2.foo2();
},{"./module1":2,"./module2":3}],2:[function(require,module,exports){
/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-10-17 15:53:55
 * @LastEditTime: 2021-10-17 15:58:46
 * @FilePath: \cloudmusic\test\module1.js
 */
module.exports = {
    foo1() {
        console.log(111);
    }
}
},{}],3:[function(require,module,exports){
/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-10-17 15:55:18
 * @LastEditTime: 2021-10-17 15:58:45
 * @FilePath: \cloudmusic\test\module2.js
 */
module.exports = {
    foo2() {
        console.log(222);
    }
}
},{}]},{},[1]);

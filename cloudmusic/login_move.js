/*
 * @Author: your name
 * @Date: 2021-10-06 14:48:47
 * @LastEditTime: 2021-10-23 13:12:08
 * @LastEditors: AdamShyly
 * @Description: In User Settings Edit
 * @FilePath: \cloudmusic\login_move.js
 */

var preLeft;
var preTop;
var prePageY;
var tempPageY;
var preBoxPageY;
var preSpaceY;
var topDistance;
var status = false;
// var preX;
// var preY;
// var preBoxX;
// var preBoxY;
// var isMouseOnShutButton;

function login_move(event, id, top) {
    event.stopPropagation(); //阻止事件冒泡
    topDistance = top || 345;
    var box = document.getElementById(id);
    // var drop = document.getElementById("login_window_head");
    // if (!isMouseOnShutButton) {
    //     preLeft = box.offsetLeft;
    //     preTop = box.offsetTop;
    //     console.log(1);
    // }

    var event = event || window.event;

    var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
    var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;

    // preX = pageX;
    // preY = pageY;
    
    // preBoxX = box.offsetLeft;
    // preBoxY = box.offsetTop;
    // console.log("pre:" + box.style.left);
    var spaceX = pageX - box.offsetLeft;
    var spaceY = pageY - box.offsetTop;
    prePageY = event.clientY;
    preSpaceY = spaceY;
    // console.log(prePageY);
    // console.log(pageY);

    document.onmousemove = function (event) {
        // var event = event || window.event;

        var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
        var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;

        // var intervalX = pageX - preX;
        // var intervalY = pageY - preY;

        // preX = pageX;
        // preX = pageY;

        // box.style.left = preBoxX + intervalX + 'px';
        // box.style.top = preBoxY + intervalY + 'px';

        // preBoxX =  box.offsetLeft;
        // preBoxY = box.offsetTop;
        box.style.left = pageX - spaceX + 'px';
        if (box.offsetTop <= topDistance) {
            box.style.top = pageY - spaceY + 'px';
            tempPageY = pageY;
            $status = false;
            // tempPageY = box.offsetTop;
        } else {
            if (prePageY > pageY) { //鼠标上移
                if (!$status) {
                    spaceY =  preSpaceY + pageY - tempPageY;
                    $status = true;
                }
                // console.log(spaceY);
                box.style.top = pageY - spaceY + 'px';
                // console.log(pageY);
                // console.log(pageY - spaceY);
                // console.log("temp:" + tempPageY);
                // console.log("now:" + prePageY);
            }
        }
        // if (prePageY < pageY && box.offsetTop > 345) {
        //     $status = false;
        // }
        prePageY = pageY;
        // console.log(box.offsetTop);
        // console.log(tempPageY);
        // window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    }
}

document.onmouseup = function () {
    document.onmousemove = null;
}

function isMouseOnShut(bool) {
    isMouseOnShutButton = bool;
}
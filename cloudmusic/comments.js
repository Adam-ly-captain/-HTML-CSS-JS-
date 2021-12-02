/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-11-21 20:31:57
 * @LastEditTime: 2021-12-03 01:58:54
 * @FilePath: \cloudmusic\comments.js
 */

var isLiked;
var index = [];
var num = 10;
// before = 1631433264545;
var userId = localStorage.getItem("userId");
var cookieToken = encodeURIComponent(localStorage.getItem("cookie"));

window.onload = function (event) {
    var albumId = localStorage.getItem("nowAlbumId");
    getAllComment(albumId, 0, num);
    var timer = setInterval(function() {
        var maxLeap = window.parent.document.getElementById("albumCommentAmount").innerHTML;
        if (maxLeap) {
            maxLeap = (parseInt(maxLeap / 10) + 1);
            document.getElementById("leapTip").innerHTML = "页码最大值 : " + maxLeap;
            clearInterval(timer);
        }
    }, 100);
    // document.body.scrollHeight = window.document.scrollingElement.offsetHeight + 'px';
}

function getAllComment(albumId, leap, limit) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var info = JSON.parse(this.responseText);
            comments = info.comments;
            // window.parent.showHotComment(comments);
            for (var i = 0, j = 0; i < comments.length; i++) {
                if (comments[i].user.userId == userId) {
                    index[j] = i;
                    j++;
                }
            }
            showComment(comments);
            // var commentDate = new Date(info.comments[0].time);
        }
    }
    xmlhttp.open('GET', 'http://localhost:4000/comment/album?id=' + albumId + "&limit=" + limit + "&offset=" + leap + "&cookie=" + cookieToken, true);
    xmlhttp.send()
}

function showComment(comments) {
    index = [];
    isLiked = new Array(num);
    var albumHotComment = document.getElementById("albumHotComment");
    albumHotComment.replaceChildren();
    for (var i = 0, j = 0; i < comments['length']; i++) {
       
        var hotComment = document.createElement("div");
        hotComment.id = "hotComment";

        var before = document.createElement("div");
        before.className = "before";

        var hotCommentAvatar = document.createElement("div");
        hotCommentAvatar.id = "hotCommentAvatar";

        var hotCommentUserAvatar = document.createElement("div");
        hotCommentUserAvatar.id = "hotCommentUserAvatar";

        var hotCommentDetail = document.createElement("div");
        hotCommentDetail.id = "hotCommentDetail";

        var hotCommentUserName = document.createElement("div");
        hotCommentUserName.id = "hotCommentUserName";
        if (i == index[j]) {
            var uid = window.localStorage.getItem("nowUser_Uid");
            var userInfo = JSON.parse(window.localStorage.getItem("user" + uid));
            hotCommentUserName.innerHTML =userInfo.uname + ":";
            hotCommentUserAvatar.style.backgroundImage = 'url(' + "http://localhost:3000/get_avatar.php?uid=" + uid + ')';
            j++;
        } else {
            hotCommentUserName.innerHTML = comments[i].user.nickname + ":";
            hotCommentUserAvatar.style.backgroundImage = "url(" + comments[i].user.avatarUrl + ")";
        }

        var hotCommentContent = document.createElement("div");
        hotCommentContent.innerHTML = comments[i].content;
        hotCommentContent.id = "hotCommentContent";

        var hotCommentTime = document.createElement("div");
        hotCommentTime.id = "hotCommentTime";
        var hotCommentDate = new Date(comments[i].time);
        var year = hotCommentDate.getFullYear();
        var month = hotCommentDate.getMonth() + 1;
        var day = hotCommentDate.getDate();
        hotCommentTime.innerHTML = year + "年" + month + "月" + day + "日";

        var hotCommentLike = document.createElement("div");
        hotCommentLike.id = "hotCommentLike";

        var LikeImg = document.createElement("div");
        LikeImg.className = "LikeImg";
        LikeImg.id = "LikeImg" + i;
        if (comments[i].liked) {
            LikeImg.style.background = "url('./img/icon2.png') -170px 0px"
        } else {
            LikeImg.style.background = "url('./img/icon2.png') -150px 0px"
        }
        isLiked[i] = comments[i].liked;

        var LikeCount = document.createElement("div");
        LikeCount.className = "LikeCount";
        LikeCount.id = "LikeCount" + i;
        LikeCount.innerHTML = comments[i].likedCount;
        LikeCount.onclick = function (event) {
            var status = /\d+/.exec(event.path[0].id);
            var cid = comments[status].commentId;
            // console.log(isLiked[i]);
            if (isliked(status)) {
                t = 0;
            } else {
                t = 1;
            }
            like(cid, t, status);
        }

        var after = document.createElement("div");
        after.className = "after";

        hotCommentAvatar.appendChild(hotCommentUserAvatar);

        hotCommentDetail.appendChild(hotCommentUserName);
        hotCommentDetail.appendChild(hotCommentContent);
        if (comments[i].beReplied['length'] != 0) {
            var hotCommentReply = document.createElement("div");
            hotCommentReply.id = "hotCommentReply";

            var hotCommentReplyName = document.createElement("div");
            hotCommentReplyName.id = "hotCommentReplyName";
            hotCommentReplyName.innerHTML = comments[i].beReplied['0'].user.nickname + ":";

            var hotCommentReplyContent = document.createElement("div");
            hotCommentReplyContent.id = "hotCommentReplyContent";
            hotCommentReplyContent.innerHTML = comments[i].beReplied['0'].content;

            var triangle = document.createElement("div");
            triangle.className = "triangle";

            hotCommentReply.appendChild(triangle);
            hotCommentReply.appendChild(hotCommentReplyName);
            hotCommentReply.appendChild(hotCommentReplyContent);

            hotCommentDetail.appendChild(hotCommentReply);
        }
        hotCommentDetail.appendChild(hotCommentTime);

        hotCommentLike.appendChild(LikeImg);
        hotCommentLike.appendChild(LikeCount);

        hotComment.appendChild(before);
        hotComment.appendChild(hotCommentAvatar)
        hotComment.appendChild(hotCommentDetail);
        hotComment.appendChild(hotCommentLike);
        hotComment.appendChild(after);

        albumHotComment.appendChild(hotComment);

    }
    window.parent.document.getElementById("newComments").style.height = window.document.scrollingElement.offsetHeight + 'px'; 
}

function isliked(id) {
    return isLiked[id];
}

function like(cid, t, id) {
    var albumId = localStorage.getItem("nowAlbumId");
    var cookieToken = encodeURIComponent(localStorage.getItem("cookie"));
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var info = JSON.parse(this.responseText);
            if (info.code == 200) {
                console.log(1);
                isLiked[id] = t;
                var likedCount = parseInt(document.getElementById("LikeCount" + id).innerHTML);
                var LikeImg = document.getElementById("LikeImg" + id);
                if (t) {
                    document.getElementById("LikeCount" + id).innerHTML = likedCount + 1;
                    LikeImg.style.background = "url('./img/icon2.png') -170px 0px"
                } else {
                    document.getElementById("LikeCount" + id).innerHTML = likedCount - 1;
                    LikeImg.style.background = "url('./img/icon2.png') -150px 0px"
                }
            }
        }
    }
    xmlhttp.open('GET', 'http://localhost:4000/comment/like?id=' + albumId + '&cid=' + cid + '&t=' + t + '&type=3&cookie=' + cookieToken, true);
    xmlhttp.send();
}

function changeComment() {
    var albumId = localStorage.getItem("nowAlbumId");
    var leap = document.getElementById("leap").value - 1;
    var maxLeap = window.parent.document.getElementById("albumCommentAmount").innerHTML;
    if (isAllNumber(leap)) {
        if (leap + 1 > parseInt(maxLeap / 10) + 1) {
            alert("页码超过评论最大值")
        } else {
            if (leap + 1 == (parseInt(maxLeap / 10) + 1)) {
                console.log(maxLeap - parseInt(maxLeap / 10) * 10);
                getAllComment(albumId, leap * num, maxLeap - parseInt(maxLeap / 10) * 10);
            } else {
                getAllComment(albumId, leap * num, num);
            }
        }
        return false;
    } else {
        alert("请输入数字");
    }
}

function isAllNumber(value) {
    var status = /^\d+$/.test(value);
    return status;
  }
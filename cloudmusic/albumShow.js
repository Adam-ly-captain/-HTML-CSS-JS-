/*
 * @Author: AdamShyly
 * @LastEditors: AdamShyly
 * @Description: The night stars live at the top of the tower
 * @Date: 2021-11-04 03:05:02
 * @LastEditTime: 2021-12-02 23:52:31
 * @FilePath: \cloudmusic\albumShow.js
 */
var screenWidth;
var screenHeight;
var isLiked;

window.onload = function (event) {
    var bodyWidth = setBodyWidth() + "px";
    document.body.style.width = bodyWidth;
    var albumId = localStorage.getItem("nowAlbumId");
    document.getElementById("albumId").innerHTML = albumId;
    getAlbumInfo(albumId);
    getAlbumDynamics(albumId);
    screenWidth = event.currentTarget.screen.availWidth;
    screenHeight = event.currentTarget.screen.availHeight;
    var uid = localStorage.getItem("nowUser_Uid");
    if (uid) {
        get_avatar(uid);
    }
    var iframe = document.getElementById("newComments");
    iframe.style.width = screenWidth + 'px';
    // iframe.style.height = '0px';
    // console.log(iframe.contentWindow.document.scrollingElement.offsetHeight);
    // console.log(iframe.contentWindow);
    // console.log(document.getElementById("albumImg").style);
    // document.getElementById("albumImg").style.backgroundSize = parseInt(screenWidth) / 5 + "px";
}

function getAlbumInfo(albumId) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var info = JSON.parse(this.responseText);
            var singer = '';
            console.log(info);
            for (var i = 0; i < info.album.artists['length']; i++) {
                if (i + 1 != info.album.artists['length']) {
                    singer += info.album.artists[i].name + "/";
                } else {
                    singer += info.album.artists[i].name;
                }
            }
            document.getElementById("singer").innerHTML = singer;
            document.getElementById("albumCompany").innerHTML = info.album.company;
            document.getElementById("albumImg").style.backgroundImage = "url(" + info.album.picUrl + ")";
            document.getElementById("albumDesc").innerHTML = info.album.description;
            document.getElementById("albumCommentAmount").innerHTML = info.album.info.commentCount;
            getAlbumComment(albumId, info.album.info.commentCount);
            var publishDate = new Date(info.album.publishTime);
            var year = publishDate.getFullYear();
            var month = parseInt(publishDate.getMonth()) + 1;
            var day = publishDate.getDate();
            document.getElementById("albumPublishTime").innerHTML = year + "-" + month + "-" + day;
        }
    }
    xmlhttp.open('GET', 'http://localhost:4000/album?id=' + albumId, true);
    xmlhttp.send()
}

function getAlbumDynamics(albumId) {
    var cookieToken = encodeURIComponent(localStorage.getItem("cookie"));
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var info = JSON.parse(this.responseText);
            console.log(info);
        }
    }
    xmlhttp.open('GET', 'http://localhost:4000/album/detail/dynamic?id=' + albumId + "&cookie=" + cookieToken, true);
    xmlhttp.send()
}

function getAlbumComment(albumId, commentCount) {
    var cookieToken = encodeURIComponent(localStorage.getItem("cookie"));
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var info = JSON.parse(this.responseText);
            console.log(info);
            showHotComment(info.hotComments)
            // var commentDate = new Date(info.comments[0].time);
        }
    }
    xmlhttp.open('GET', 'http://localhost:4000/comment/album?id=' + albumId + "&limit=" + 10 + "&cookie=" + cookieToken, true);
    xmlhttp.send()
}

function showHotComment(hotComments) {
    var albumHotComment = document.getElementById("albumHotComment");
    isLiked = new Array(hotComments['length']);
    for (var i = 0; i < hotComments['length']; i++) {
        var hotComment = document.createElement("div");
        hotComment.id = "hotComment";

        var before = document.createElement("div");
        before.className = "before";

        var hotCommentAvatar = document.createElement("div");
        hotCommentAvatar.id = "hotCommentAvatar";

        var hotCommentUserAvatar = document.createElement("div");
        hotCommentUserAvatar.id = "hotCommentUserAvatar";
        hotCommentUserAvatar.style.backgroundImage = "url(" + hotComments[i].user.avatarUrl + ")";

        var hotCommentDetail = document.createElement("div");
        hotCommentDetail.id = "hotCommentDetail";

        var hotCommentUserName = document.createElement("div");
        hotCommentUserName.id = "hotCommentUserName";
        hotCommentUserName.innerHTML = hotComments[i].user.nickname + ":";

        var hotCommentContent = document.createElement("div");
        hotCommentContent.innerHTML = hotComments[i].content;
        hotCommentContent.id = "hotCommentContent";

        var hotCommentTime = document.createElement("div");
        hotCommentTime.id = "hotCommentTime";
        var hotCommentDate = new Date(hotComments[i].time);
        var year = hotCommentDate.getFullYear();
        var month = hotCommentDate.getMonth() + 1;
        var day = hotCommentDate.getDate();
        hotCommentTime.innerHTML = year + "年" + month + "月" + day + "日";

        var hotCommentLike = document.createElement("div");
        hotCommentLike.id = "hotCommentLike";

        var LikeImg = document.createElement("div");
        LikeImg.className = "LikeImg";
        LikeImg.id = "LikeImg" + i;
        if (hotComments[i].liked) {
            LikeImg.style.background = "url('./img/icon2.png') -170px 0px"
        } else {
            LikeImg.style.background = "url('./img/icon2.png') -150px 0px"
        }
        isLiked[i] = hotComments[i].liked;

        var LikeCount = document.createElement("div");
        LikeCount.className = "LikeCount";
        LikeCount.id = "LikeCount" + i;
        LikeCount.innerHTML = hotComments[i].likedCount;
        LikeCount.onclick = function (event) {
            var status = /\d+/.exec(event.path[0].id);
            var cid = hotComments[status].commentId;
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
        if (hotComments[i].beReplied['length'] != 0) {
            var hotCommentReply = document.createElement("div");
            hotCommentReply.id = "hotCommentReply";

            var hotCommentReplyName = document.createElement("div");
            hotCommentReplyName.id = "hotCommentReplyName";
            hotCommentReplyName.innerHTML = hotComments[i].beReplied['0'].user.nickname + ":";

            var hotCommentReplyContent = document.createElement("div");
            hotCommentReplyContent.id = "hotCommentReplyContent";
            hotCommentReplyContent.innerHTML = hotComments[i].beReplied['0'].content;

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

function countWords() {
    var user_comment = document.getElementById("userComment").value;
    var count = document.getElementById("countWord");
    if (user_comment.length == 0) {
        count.innerHTML = '';
    } else {
        count.innerHTML = 140 - user_comment.length;
        if (user_comment.length == 140) {
            count.style.color = "red";
        } else {
            count.style.color = "white";
        }
    }
}

function get_avatar(uid) {
    document.getElementById("user_avatar").src = "http://localhost:3000/get_avatar.php?uid=" + uid;
}

function send_comment(t) {
    var albumId = localStorage.getItem("nowAlbumId");
    var cookieToken = encodeURIComponent(localStorage.getItem("cookie"));
    var comment = document.getElementById("userComment");
    if (comment.value) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var info = JSON.parse(this.responseText);
                if (info.code == 200) {
                    window.location.reload();
                } else {
                    console.log(info);
                    alert("发送错误,请重试");
                }
            }
        }
        xmlhttp.open('GET', 'http://localhost:4000/comment?t=' + t + '&type=3&id=' + albumId + '&content=' + comment.value + "&cookie=" + cookieToken, true);
        xmlhttp.send();
    } else {
        alert("评论内容不能为空");
    }
}

function setBodyWidth(){
	var barWidthHelper = document.createElement('div');
	barWidthHelper.style.cssText = "overflow:scroll; width:100px; height:100px;";
	document.body.appendChild(barWidthHelper);
	var barWidth = barWidthHelper.offsetWidth-barWidthHelper.clientWidth;
	document.body.removeChild(barWidthHelper);
	var bodyWidth = window.screen.availWidth - barWidth;
	return bodyWidth;
}

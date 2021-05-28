var time = setInterval(count, 1000);
var times = 1;
var firetime = 15 + "s";
var flag = true;
var firework1 = document.getElementById("fireWork1");
var firework2 = document.getElementById("fireWork2");
var firework3 = document.getElementById("fireWork3");
var firework4 = document.getElementById("fireWork4");
var firework5 = document.getElementById("fireWork5"); //send
firework1.style.animationDelay = firetime;
firework2.style.animationDelay = firetime;
firework3.style.animationDelay = firetime;
firework4.style.animationDelay = firetime;
firework5.style.animationDelay = firetime;

function count() {
    if (times == 15 && flag) {
        document.body.appendChild(firework1);
        document.body.appendChild(firework2);
        document.body.appendChild(firework3);
        document.body.appendChild(firework4);
        document.body.appendChild(firework5);
        flag = false;
    } else if (times % 6 == 0 && !flag) {
        // var start_time = new Date();
        var delay_time1 = (1 + Math.random()) * 1000;
        var delay_time2 = (1 + Math.random()) * 1000;
        var delay_time3 = (1 + Math.random()) * 1000;
        var delay_time4 = (1 + Math.random()) * 1000;
        var delay_time5 = (1 + Math.random()) * 1000;
        // console.log(delay_time3);
        firework1.style.animationDelay = delay_time1 + "ms";
        firework2.style.animationDelay = delay_time2 + "ms";
        firework3.style.animationDelay = delay_time3 + "ms";
        firework4.style.animationDelay = delay_time4 + "ms";
        firework5.style.animationDelay = delay_time5 + "ms";
        document.body.appendChild(firework1);/*定义延时时间和加入元素顺序不可颠倒*/
        setTimeout(fireShow1, delay_time1 + 2100);
        document.body.appendChild(firework2);
        setTimeout(fireShow2, delay_time2 + 2100);
        document.body.appendChild(firework3);
        setTimeout(fireShow3, delay_time3 + 2100);
        document.body.appendChild(firework4);
        setTimeout(fireShow4, delay_time4 + 2100);
        document.body.appendChild(firework5);
        setTimeout(fireShow5, delay_time5 + 2100);
    }
    times++;
    // if (times == 48) {

    // }

    // var now_time = new Date();
    // console.log(now_time -start_time);
    // // console.log(20002/1000);
    // if ((now_time - start_time) / 1000 == 12){
    //     fire();
    //     console.log(now_time - start_time);
    // }
}

// var flag = false;
// var start_time = new Date();
// var now_time = new Date();
// while ((now_time - start_time) / 1000 != 30) {
//     var now_time = new Date();
//     if ((now_time - start_time) / 1000 == 10 && !flag) {
//         var time = setInterval(fire, 2000);
//         console.log(now_time - start_time);
//         flag = true;
//     }
//     if (flag && ((now_time - start_time) / 1000 == 2)) {
//         var time = setInterval(fire, 2000);
//         // console.log(now_time - start_time);
//     }
// }
function fireShow1() {
    var Flame1 = document.getElementById("Flame1");
    // var fireFlame1 = document.getElementsByClassName("fireFlame1");
    // var fireFlame2 = document.getElementsByClassName("fireFlame2");
    // var fireFlame3 = document.getElementsByClassName("fireFlame3");
    // var fireFlame4 = document.getElementsByClassName("fireFlame4");
    // var fireFlame5 = document.getElementsByClassName("fireFlame5");
    var flame11 = document.getElementById("flame11");
    var flame12 = document.getElementById("flame12");
    var flame13 = document.getElementById("flame13");
    var flame14 = document.getElementById("flame14");
    var flame15 = document.getElementById("flame15");
    var flame16 = document.getElementById("flame16");
    var flame17 = document.getElementById("flame17");
    var flame18 = document.getElementById("flame18");
    var flame21 = document.getElementById("flame21");
    var flame22 = document.getElementById("flame22");
    var flame23 = document.getElementById("flame23");
    var flame24 = document.getElementById("flame24");
    var flame25 = document.getElementById("flame25");
    var flame26 = document.getElementById("flame26");
    var flame27 = document.getElementById("flame27");
    var flame28 = document.getElementById("flame28");
    var flame31 = document.getElementById("flame31");
    var flame32 = document.getElementById("flame32");
    var flame33 = document.getElementById("flame33");
    var flame34 = document.getElementById("flame34");
    var flame35 = document.getElementById("flame35");
    var flame36 = document.getElementById("flame36");
    var flame37 = document.getElementById("flame37");
    var flame38 = document.getElementById("flame38");
    var flame41 = document.getElementById("flame41");
    var flame42 = document.getElementById("flame42");
    var flame43 = document.getElementById("flame43");
    var flame44 = document.getElementById("flame44");
    var flame45 = document.getElementById("flame45");
    var flame46 = document.getElementById("flame46");
    var flame47 = document.getElementById("flame47");
    var flame48 = document.getElementById("flame48");
    var flame49 = document.getElementById("flame49");
    var flame401 = document.getElementById("flame401");
    var flame402 = document.getElementById("flame402");
    var flame403 = document.getElementById("flame403");
    var flame51 = document.getElementById("flame51");
    var flame52 = document.getElementById("flame52");
    var flame53 = document.getElementById("flame53");
    var flame54 = document.getElementById("flame54");
    var flame55 = document.getElementById("flame55");
    var flame56 = document.getElementById("flame56");
    var flame57 = document.getElementById("flame57");
    var flame58 = document.getElementById("flame58");
    document.body.appendChild(Flame1);
    Flame1.appendChild(flame11);
    Flame1.appendChild(flame11);
    Flame1.appendChild(flame12);
    Flame1.appendChild(flame13);
    Flame1.appendChild(flame14);
    Flame1.appendChild(flame15);
    Flame1.appendChild(flame16);
    Flame1.appendChild(flame17);
    Flame1.appendChild(flame18);
    Flame1.appendChild(flame21);
    Flame1.appendChild(flame22);
    Flame1.appendChild(flame23);
    Flame1.appendChild(flame24);
    Flame1.appendChild(flame25);
    Flame1.appendChild(flame26);
    Flame1.appendChild(flame27);
    Flame1.appendChild(flame28);
    Flame1.appendChild(flame31);
    Flame1.appendChild(flame32);
    Flame1.appendChild(flame33);
    Flame1.appendChild(flame34);
    Flame1.appendChild(flame35);
    Flame1.appendChild(flame36);
    Flame1.appendChild(flame37);
    Flame1.appendChild(flame38);
    Flame1.appendChild(flame41);
    Flame1.appendChild(flame42);
    Flame1.appendChild(flame43);
    Flame1.appendChild(flame44);
    Flame1.appendChild(flame45);
    Flame1.appendChild(flame46);
    Flame1.appendChild(flame47);
    Flame1.appendChild(flame48);
    Flame1.appendChild(flame49);
    Flame1.appendChild(flame401);
    Flame1.appendChild(flame402);
    Flame1.appendChild(flame403);
    Flame1.appendChild(flame51);
    Flame1.appendChild(flame52);
    Flame1.appendChild(flame53);
    Flame1.appendChild(flame54);
    Flame1.appendChild(flame55);
    Flame1.appendChild(flame56);
    Flame1.appendChild(flame57);
    Flame1.appendChild(flame58);
    fireColor1();
}

function fireColor1() {
    var fireFlame11 = document.getElementsByClassName("fireFlame11");
    var fireFlame12 = document.getElementsByClassName("fireFlame12");
    var fireFlame13 = document.getElementsByClassName("fireFlame13");
    var fireFlame14 = document.getElementsByClassName("fireFlame14");
    var fireFlame15 = document.getElementsByClassName("fireFlame15");
    var rand = Math.random() * 5 + 1;
    if (rand >= 1 && rand <= 2) {
        for (var i = 0; i < 8; i++) {
            fireFlame11[i].style.backgroundColor = "rgb(2, 255, 2)";
            fireFlame12[i].style.backgroundColor = "rgb(2, 255, 2)";
            fireFlame13[i].style.backgroundColor = "rgb(2, 255, 2)";
            fireFlame15[i].style.backgroundColor = "rgb(2, 255, 2)";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame14[i].style.backgroundColor = "rgb(2, 255, 2)";
        }
    } else if (rand > 2 && rand <= 3) {
        for (var i = 0; i < 8; i++) {
            fireFlame11[i].style.backgroundColor = "pink";
            fireFlame12[i].style.backgroundColor = "pink";
            fireFlame13[i].style.backgroundColor = "pink";
            fireFlame15[i].style.backgroundColor = "pink";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame14[i].style.backgroundColor = "pink";
        }
    } else if (rand > 3 && rand <= 4) {
        for (var i = 0; i < 8; i++) {
            fireFlame11[i].style.backgroundColor = "blue";
            fireFlame12[i].style.backgroundColor = "blue";
            fireFlame13[i].style.backgroundColor = "blue";
            fireFlame15[i].style.backgroundColor = "blue";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame14[i].style.backgroundColor = "blue";
        }
    } else if (rand > 4 && rand <= 5) {
        for (var i = 0; i < 8; i++) {
            fireFlame11[i].style.backgroundColor = "orange";
            fireFlame12[i].style.backgroundColor = "orange";
            fireFlame13[i].style.backgroundColor = "orange";
            fireFlame15[i].style.backgroundColor = "orange";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame14[i].style.backgroundColor = "orange";
        }
    } else if (rand > 5 && rand <= 6) {
        for (var i = 0; i < 8; i++) {
            fireFlame11[i].style.backgroundColor = "red";
            fireFlame12[i].style.backgroundColor = "red";
            fireFlame13[i].style.backgroundColor = "red";
            fireFlame15[i].style.backgroundColor = "red";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame14[i].style.backgroundColor = "red";
        }
    }
}

function fireShow2() {
    var Flame1 = document.getElementById("Flame2");
    // var fireFlame1 = document.getElementsByClassName("fireFlame1");
    // var fireFlame2 = document.getElementsByClassName("fireFlame2");
    // var fireFlame3 = document.getElementsByClassName("fireFlame3");
    // var fireFlame4 = document.getElementsByClassName("fireFlame4");
    // var fireFlame5 = document.getElementsByClassName("fireFlame5");
    var flame11 = document.getElementById("flame11");
    var flame12 = document.getElementById("flame12");
    var flame13 = document.getElementById("flame13");
    var flame14 = document.getElementById("flame14");
    var flame15 = document.getElementById("flame15");
    var flame16 = document.getElementById("flame16");
    var flame17 = document.getElementById("flame17");
    var flame18 = document.getElementById("flame18");
    var flame21 = document.getElementById("flame21");
    var flame22 = document.getElementById("flame22");
    var flame23 = document.getElementById("flame23");
    var flame24 = document.getElementById("flame24");
    var flame25 = document.getElementById("flame25");
    var flame26 = document.getElementById("flame26");
    var flame27 = document.getElementById("flame27");
    var flame28 = document.getElementById("flame28");
    var flame31 = document.getElementById("flame31");
    var flame32 = document.getElementById("flame32");
    var flame33 = document.getElementById("flame33");
    var flame34 = document.getElementById("flame34");
    var flame35 = document.getElementById("flame35");
    var flame36 = document.getElementById("flame36");
    var flame37 = document.getElementById("flame37");
    var flame38 = document.getElementById("flame38");
    var flame41 = document.getElementById("flame41");
    var flame42 = document.getElementById("flame42");
    var flame43 = document.getElementById("flame43");
    var flame44 = document.getElementById("flame44");
    var flame45 = document.getElementById("flame45");
    var flame46 = document.getElementById("flame46");
    var flame47 = document.getElementById("flame47");
    var flame48 = document.getElementById("flame48");
    var flame49 = document.getElementById("flame49");
    var flame401 = document.getElementById("flame401");
    var flame402 = document.getElementById("flame402");
    var flame403 = document.getElementById("flame403");
    var flame51 = document.getElementById("flame51");
    var flame52 = document.getElementById("flame52");
    var flame53 = document.getElementById("flame53");
    var flame54 = document.getElementById("flame54");
    var flame55 = document.getElementById("flame55");
    var flame56 = document.getElementById("flame56");
    var flame57 = document.getElementById("flame57");
    var flame58 = document.getElementById("flame58");
    document.body.appendChild(Flame1);
    Flame1.appendChild(flame11);
    Flame1.appendChild(flame11);
    Flame1.appendChild(flame12);
    Flame1.appendChild(flame13);
    Flame1.appendChild(flame14);
    Flame1.appendChild(flame15);
    Flame1.appendChild(flame16);
    Flame1.appendChild(flame17);
    Flame1.appendChild(flame18);
    Flame1.appendChild(flame21);
    Flame1.appendChild(flame22);
    Flame1.appendChild(flame23);
    Flame1.appendChild(flame24);
    Flame1.appendChild(flame25);
    Flame1.appendChild(flame26);
    Flame1.appendChild(flame27);
    Flame1.appendChild(flame28);
    Flame1.appendChild(flame31);
    Flame1.appendChild(flame32);
    Flame1.appendChild(flame33);
    Flame1.appendChild(flame34);
    Flame1.appendChild(flame35);
    Flame1.appendChild(flame36);
    Flame1.appendChild(flame37);
    Flame1.appendChild(flame38);
    Flame1.appendChild(flame41);
    Flame1.appendChild(flame42);
    Flame1.appendChild(flame43);
    Flame1.appendChild(flame44);
    Flame1.appendChild(flame45);
    Flame1.appendChild(flame46);
    Flame1.appendChild(flame47);
    Flame1.appendChild(flame48);
    Flame1.appendChild(flame49);
    Flame1.appendChild(flame401);
    Flame1.appendChild(flame402);
    Flame1.appendChild(flame403);
    Flame1.appendChild(flame51);
    Flame1.appendChild(flame52);
    Flame1.appendChild(flame53);
    Flame1.appendChild(flame54);
    Flame1.appendChild(flame55);
    Flame1.appendChild(flame56);
    Flame1.appendChild(flame57);
    Flame1.appendChild(flame58);
    fireColor2();
}

function fireColor2() {
    var fireFlame21 = document.getElementsByClassName("fireFlame21");
    var fireFlame22 = document.getElementsByClassName("fireFlame22");
    var fireFlame23 = document.getElementsByClassName("fireFlame23");
    var fireFlame24 = document.getElementsByClassName("fireFlame24");
    var fireFlame25 = document.getElementsByClassName("fireFlame25");
    var rand = Math.random() * 5 + 1;
    if (rand >= 1 && rand <= 2) {
        for (var i = 0; i < 8; i++) {
            fireFlame21[i].style.backgroundColor = "rgb(2, 255, 2)";
            fireFlame22[i].style.backgroundColor = "rgb(2, 255, 2)";
            fireFlame23[i].style.backgroundColor = "rgb(2, 255, 2)";
            fireFlame25[i].style.backgroundColor = "rgb(2, 255, 2)";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame24[i].style.backgroundColor = "rgb(2, 255, 2)";
        }
    } else if (rand > 2 && rand <= 3) {
        for (var i = 0; i < 8; i++) {
            fireFlame21[i].style.backgroundColor = "pink";
            fireFlame22[i].style.backgroundColor = "pink";
            fireFlame23[i].style.backgroundColor = "pink";
            fireFlame25[i].style.backgroundColor = "pink";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame24[i].style.backgroundColor = "pink";
        }
    } else if (rand > 3 && rand <= 4) {
        for (var i = 0; i < 8; i++) {
            fireFlame21[i].style.backgroundColor = "yellow";
            fireFlame22[i].style.backgroundColor = "yellow";
            fireFlame23[i].style.backgroundColor = "yellow";
            fireFlame25[i].style.backgroundColor = "yellow";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame24[i].style.backgroundColor = "yellow";
        }
    } else if (rand > 4 && rand <= 5) {
        for (var i = 0; i < 8; i++) {
            fireFlame21[i].style.backgroundColor = "blue";
            fireFlame22[i].style.backgroundColor = "blue";
            fireFlame23[i].style.backgroundColor = "blue";
            fireFlame25[i].style.backgroundColor = "blue";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame24[i].style.backgroundColor = "blue";
        }
    } else if (rand > 5 && rand <= 6) {
        for (var i = 0; i < 8; i++) {
            fireFlame21[i].style.backgroundColor = "orange";
            fireFlame22[i].style.backgroundColor = "orange";
            fireFlame23[i].style.backgroundColor = "orange";
            fireFlame25[i].style.backgroundColor = "orange";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame24[i].style.backgroundColor = "orange";
        }
    }
}

function fireShow3() {
    var Flame1 = document.getElementById("Flame3");
    // var fireFlame1 = document.getElementsByClassName("fireFlame1");
    // var fireFlame2 = document.getElementsByClassName("fireFlame2");
    // var fireFlame3 = document.getElementsByClassName("fireFlame3");
    // var fireFlame4 = document.getElementsByClassName("fireFlame4");
    // var fireFlame5 = document.getElementsByClassName("fireFlame5");
    var flame11 = document.getElementById("flame11");
    var flame12 = document.getElementById("flame12");
    var flame13 = document.getElementById("flame13");
    var flame14 = document.getElementById("flame14");
    var flame15 = document.getElementById("flame15");
    var flame16 = document.getElementById("flame16");
    var flame17 = document.getElementById("flame17");
    var flame18 = document.getElementById("flame18");
    var flame21 = document.getElementById("flame21");
    var flame22 = document.getElementById("flame22");
    var flame23 = document.getElementById("flame23");
    var flame24 = document.getElementById("flame24");
    var flame25 = document.getElementById("flame25");
    var flame26 = document.getElementById("flame26");
    var flame27 = document.getElementById("flame27");
    var flame28 = document.getElementById("flame28");
    var flame31 = document.getElementById("flame31");
    var flame32 = document.getElementById("flame32");
    var flame33 = document.getElementById("flame33");
    var flame34 = document.getElementById("flame34");
    var flame35 = document.getElementById("flame35");
    var flame36 = document.getElementById("flame36");
    var flame37 = document.getElementById("flame37");
    var flame38 = document.getElementById("flame38");
    var flame41 = document.getElementById("flame41");
    var flame42 = document.getElementById("flame42");
    var flame43 = document.getElementById("flame43");
    var flame44 = document.getElementById("flame44");
    var flame45 = document.getElementById("flame45");
    var flame46 = document.getElementById("flame46");
    var flame47 = document.getElementById("flame47");
    var flame48 = document.getElementById("flame48");
    var flame49 = document.getElementById("flame49");
    var flame401 = document.getElementById("flame401");
    var flame402 = document.getElementById("flame402");
    var flame403 = document.getElementById("flame403");
    var flame51 = document.getElementById("flame51");
    var flame52 = document.getElementById("flame52");
    var flame53 = document.getElementById("flame53");
    var flame54 = document.getElementById("flame54");
    var flame55 = document.getElementById("flame55");
    var flame56 = document.getElementById("flame56");
    var flame57 = document.getElementById("flame57");
    var flame58 = document.getElementById("flame58");
    document.body.appendChild(Flame1);
    Flame1.appendChild(flame11);
    Flame1.appendChild(flame11);
    Flame1.appendChild(flame12);
    Flame1.appendChild(flame13);
    Flame1.appendChild(flame14);
    Flame1.appendChild(flame15);
    Flame1.appendChild(flame16);
    Flame1.appendChild(flame17);
    Flame1.appendChild(flame18);
    Flame1.appendChild(flame21);
    Flame1.appendChild(flame22);
    Flame1.appendChild(flame23);
    Flame1.appendChild(flame24);
    Flame1.appendChild(flame25);
    Flame1.appendChild(flame26);
    Flame1.appendChild(flame27);
    Flame1.appendChild(flame28);
    Flame1.appendChild(flame31);
    Flame1.appendChild(flame32);
    Flame1.appendChild(flame33);
    Flame1.appendChild(flame34);
    Flame1.appendChild(flame35);
    Flame1.appendChild(flame36);
    Flame1.appendChild(flame37);
    Flame1.appendChild(flame38);
    Flame1.appendChild(flame41);
    Flame1.appendChild(flame42);
    Flame1.appendChild(flame43);
    Flame1.appendChild(flame44);
    Flame1.appendChild(flame45);
    Flame1.appendChild(flame46);
    Flame1.appendChild(flame47);
    Flame1.appendChild(flame48);
    Flame1.appendChild(flame49);
    Flame1.appendChild(flame401);
    Flame1.appendChild(flame402);
    Flame1.appendChild(flame403);
    Flame1.appendChild(flame51);
    Flame1.appendChild(flame52);
    Flame1.appendChild(flame53);
    Flame1.appendChild(flame54);
    Flame1.appendChild(flame55);
    Flame1.appendChild(flame56);
    Flame1.appendChild(flame57);
    Flame1.appendChild(flame58);
    fireColor3();
}

function fireColor3() {
    var fireFlame31 = document.getElementsByClassName("fireFlame31");
    var fireFlame32 = document.getElementsByClassName("fireFlame32");
    var fireFlame33 = document.getElementsByClassName("fireFlame33");
    var fireFlame34 = document.getElementsByClassName("fireFlame34");
    var fireFlame35 = document.getElementsByClassName("fireFlame35");
    var rand = Math.random() * 5 + 1;
    if (rand >= 1 && rand <= 2) {
        for (var i = 0; i < 8; i++) {
            fireFlame31[i].style.backgroundColor = "rgb(2, 255, 2)";
            fireFlame32[i].style.backgroundColor = "rgb(2, 255, 2)";
            fireFlame33[i].style.backgroundColor = "rgb(2, 255, 2)";
            fireFlame35[i].style.backgroundColor = "rgb(2, 255, 2)";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame34[i].style.backgroundColor = "rgb(2, 255, 2)";
        }
    } else if (rand > 2 && rand <= 3) {
        for (var i = 0; i < 8; i++) {
            fireFlame31[i].style.backgroundColor = "pink";
            fireFlame32[i].style.backgroundColor = "pink";
            fireFlame33[i].style.backgroundColor = "pink";
            fireFlame35[i].style.backgroundColor = "pink";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame34[i].style.backgroundColor = "pink";
        }
    } else if (rand > 3 && rand <= 4) {
        for (var i = 0; i < 8; i++) {
            fireFlame31[i].style.backgroundColor = "blue";
            fireFlame32[i].style.backgroundColor = "blue";
            fireFlame33[i].style.backgroundColor = "blue";
            fireFlame35[i].style.backgroundColor = "blue";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame34[i].style.backgroundColor = "blue";
        }
    } else if (rand > 4 && rand <= 5) {
        for (var i = 0; i < 8; i++) {
            fireFlame31[i].style.backgroundColor = "orange";
            fireFlame32[i].style.backgroundColor = "orange";
            fireFlame33[i].style.backgroundColor = "orange";
            fireFlame35[i].style.backgroundColor = "orange";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame34[i].style.backgroundColor = "orange";
        }
    } else if (rand > 5 && rand <= 6) {
        for (var i = 0; i < 8; i++) {
            fireFlame31[i].style.backgroundColor = "purple";
            fireFlame32[i].style.backgroundColor = "purple";
            fireFlame33[i].style.backgroundColor = "purple";
            fireFlame35[i].style.backgroundColor = "purple";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame34[i].style.backgroundColor = "purple";
        }
    }
}

function fireShow4() {
    var Flame1 = document.getElementById("Flame4");
    // var fireFlame1 = document.getElementsByClassName("fireFlame1");
    // var fireFlame2 = document.getElementsByClassName("fireFlame2");
    // var fireFlame3 = document.getElementsByClassName("fireFlame3");
    // var fireFlame4 = document.getElementsByClassName("fireFlame4");
    // var fireFlame5 = document.getElementsByClassName("fireFlame5");
    var flame11 = document.getElementById("flame11");
    var flame12 = document.getElementById("flame12");
    var flame13 = document.getElementById("flame13");
    var flame14 = document.getElementById("flame14");
    var flame15 = document.getElementById("flame15");
    var flame16 = document.getElementById("flame16");
    var flame17 = document.getElementById("flame17");
    var flame18 = document.getElementById("flame18");
    var flame21 = document.getElementById("flame21");
    var flame22 = document.getElementById("flame22");
    var flame23 = document.getElementById("flame23");
    var flame24 = document.getElementById("flame24");
    var flame25 = document.getElementById("flame25");
    var flame26 = document.getElementById("flame26");
    var flame27 = document.getElementById("flame27");
    var flame28 = document.getElementById("flame28");
    var flame31 = document.getElementById("flame31");
    var flame32 = document.getElementById("flame32");
    var flame33 = document.getElementById("flame33");
    var flame34 = document.getElementById("flame34");
    var flame35 = document.getElementById("flame35");
    var flame36 = document.getElementById("flame36");
    var flame37 = document.getElementById("flame37");
    var flame38 = document.getElementById("flame38");
    var flame41 = document.getElementById("flame41");
    var flame42 = document.getElementById("flame42");
    var flame43 = document.getElementById("flame43");
    var flame44 = document.getElementById("flame44");
    var flame45 = document.getElementById("flame45");
    var flame46 = document.getElementById("flame46");
    var flame47 = document.getElementById("flame47");
    var flame48 = document.getElementById("flame48");
    var flame49 = document.getElementById("flame49");
    var flame401 = document.getElementById("flame401");
    var flame402 = document.getElementById("flame402");
    var flame403 = document.getElementById("flame403");
    var flame51 = document.getElementById("flame51");
    var flame52 = document.getElementById("flame52");
    var flame53 = document.getElementById("flame53");
    var flame54 = document.getElementById("flame54");
    var flame55 = document.getElementById("flame55");
    var flame56 = document.getElementById("flame56");
    var flame57 = document.getElementById("flame57");
    var flame58 = document.getElementById("flame58");
    document.body.appendChild(Flame1);
    Flame1.appendChild(flame11);
    Flame1.appendChild(flame11);
    Flame1.appendChild(flame12);
    Flame1.appendChild(flame13);
    Flame1.appendChild(flame14);
    Flame1.appendChild(flame15);
    Flame1.appendChild(flame16);
    Flame1.appendChild(flame17);
    Flame1.appendChild(flame18);
    Flame1.appendChild(flame21);
    Flame1.appendChild(flame22);
    Flame1.appendChild(flame23);
    Flame1.appendChild(flame24);
    Flame1.appendChild(flame25);
    Flame1.appendChild(flame26);
    Flame1.appendChild(flame27);
    Flame1.appendChild(flame28);
    Flame1.appendChild(flame31);
    Flame1.appendChild(flame32);
    Flame1.appendChild(flame33);
    Flame1.appendChild(flame34);
    Flame1.appendChild(flame35);
    Flame1.appendChild(flame36);
    Flame1.appendChild(flame37);
    Flame1.appendChild(flame38);
    Flame1.appendChild(flame41);
    Flame1.appendChild(flame42);
    Flame1.appendChild(flame43);
    Flame1.appendChild(flame44);
    Flame1.appendChild(flame45);
    Flame1.appendChild(flame46);
    Flame1.appendChild(flame47);
    Flame1.appendChild(flame48);
    Flame1.appendChild(flame49);
    Flame1.appendChild(flame401);
    Flame1.appendChild(flame402);
    Flame1.appendChild(flame403);
    Flame1.appendChild(flame51);
    Flame1.appendChild(flame52);
    Flame1.appendChild(flame53);
    Flame1.appendChild(flame54);
    Flame1.appendChild(flame55);
    Flame1.appendChild(flame56);
    Flame1.appendChild(flame57);
    Flame1.appendChild(flame58);
    fireColor4();
}

function fireColor4() {
    var fireFlame41 = document.getElementsByClassName("fireFlame41");
    var fireFlame42 = document.getElementsByClassName("fireFlame42");
    var fireFlame43 = document.getElementsByClassName("fireFlame43");
    var fireFlame44 = document.getElementsByClassName("fireFlame44");
    var fireFlame45 = document.getElementsByClassName("fireFlame45");
    var rand = Math.random() * 5 + 1;
    if (rand >= 1 && rand <= 2) {
        for (var i = 0; i < 8; i++) {
            fireFlame41[i].style.backgroundColor = "rgb(2, 255, 2)";
            fireFlame42[i].style.backgroundColor = "rgb(2, 255, 2)";
            fireFlame43[i].style.backgroundColor = "rgb(2, 255, 2)";
            fireFlame45[i].style.backgroundColor = "rgb(2, 255, 2)";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame44[i].style.backgroundColor = "rgb(2, 255, 2)";
        }
    } else if (rand > 2 && rand <= 3) {
        for (var i = 0; i < 8; i++) {
            fireFlame41[i].style.backgroundColor = "purple";
            fireFlame42[i].style.backgroundColor = "purple";
            fireFlame43[i].style.backgroundColor = "purple";
            fireFlame45[i].style.backgroundColor = "purple";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame44[i].style.backgroundColor = "purple";
        }
    } else if (rand > 3 && rand <= 4) {
        for (var i = 0; i < 8; i++) {
            fireFlame41[i].style.backgroundColor = "pink";
            fireFlame42[i].style.backgroundColor = "pink";
            fireFlame43[i].style.backgroundColor = "pink";
            fireFlame45[i].style.backgroundColor = "pink";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame44[i].style.backgroundColor = "pink";
        }
    } else if (rand > 4 && rand <= 5) {
        for (var i = 0; i < 8; i++) {
            fireFlame41[i].style.backgroundColor = "orange";
            fireFlame42[i].style.backgroundColor = "orange";
            fireFlame43[i].style.backgroundColor = "orange";
            fireFlame45[i].style.backgroundColor = "orange";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame44[i].style.backgroundColor = "orange";
        }
    } else if (rand > 5 && rand <= 6) {
        for (var i = 0; i < 8; i++) {
            fireFlame41[i].style.backgroundColor = "red";
            fireFlame42[i].style.backgroundColor = "red";
            fireFlame43[i].style.backgroundColor = "red";
            fireFlame45[i].style.backgroundColor = "red";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame44[i].style.backgroundColor = "red";
        }
    }
}

function fireShow5() {
    var Flame1 = document.getElementById("Flame5");
    // var fireFlame1 = document.getElementsByClassName("fireFlame1");
    // var fireFlame2 = document.getElementsByClassName("fireFlame2");
    // var fireFlame3 = document.getElementsByClassName("fireFlame3");
    // var fireFlame4 = document.getElementsByClassName("fireFlame4");
    // var fireFlame5 = document.getElementsByClassName("fireFlame5");
    var flame11 = document.getElementById("flame11");
    var flame12 = document.getElementById("flame12");
    var flame13 = document.getElementById("flame13");
    var flame14 = document.getElementById("flame14");
    var flame15 = document.getElementById("flame15");
    var flame16 = document.getElementById("flame16");
    var flame17 = document.getElementById("flame17");
    var flame18 = document.getElementById("flame18");
    var flame21 = document.getElementById("flame21");
    var flame22 = document.getElementById("flame22");
    var flame23 = document.getElementById("flame23");
    var flame24 = document.getElementById("flame24");
    var flame25 = document.getElementById("flame25");
    var flame26 = document.getElementById("flame26");
    var flame27 = document.getElementById("flame27");
    var flame28 = document.getElementById("flame28");
    var flame31 = document.getElementById("flame31");
    var flame32 = document.getElementById("flame32");
    var flame33 = document.getElementById("flame33");
    var flame34 = document.getElementById("flame34");
    var flame35 = document.getElementById("flame35");
    var flame36 = document.getElementById("flame36");
    var flame37 = document.getElementById("flame37");
    var flame38 = document.getElementById("flame38");
    var flame41 = document.getElementById("flame41");
    var flame42 = document.getElementById("flame42");
    var flame43 = document.getElementById("flame43");
    var flame44 = document.getElementById("flame44");
    var flame45 = document.getElementById("flame45");
    var flame46 = document.getElementById("flame46");
    var flame47 = document.getElementById("flame47");
    var flame48 = document.getElementById("flame48");
    var flame49 = document.getElementById("flame49");
    var flame401 = document.getElementById("flame401");
    var flame402 = document.getElementById("flame402");
    var flame403 = document.getElementById("flame403");
    var flame51 = document.getElementById("flame51");
    var flame52 = document.getElementById("flame52");
    var flame53 = document.getElementById("flame53");
    var flame54 = document.getElementById("flame54");
    var flame55 = document.getElementById("flame55");
    var flame56 = document.getElementById("flame56");
    var flame57 = document.getElementById("flame57");
    var flame58 = document.getElementById("flame58");
    document.body.appendChild(Flame1);
    Flame1.appendChild(flame11);
    Flame1.appendChild(flame11);
    Flame1.appendChild(flame12);
    Flame1.appendChild(flame13);
    Flame1.appendChild(flame14);
    Flame1.appendChild(flame15);
    Flame1.appendChild(flame16);
    Flame1.appendChild(flame17);
    Flame1.appendChild(flame18);
    Flame1.appendChild(flame21);
    Flame1.appendChild(flame22);
    Flame1.appendChild(flame23);
    Flame1.appendChild(flame24);
    Flame1.appendChild(flame25);
    Flame1.appendChild(flame26);
    Flame1.appendChild(flame27);
    Flame1.appendChild(flame28);
    Flame1.appendChild(flame31);
    Flame1.appendChild(flame32);
    Flame1.appendChild(flame33);
    Flame1.appendChild(flame34);
    Flame1.appendChild(flame35);
    Flame1.appendChild(flame36);
    Flame1.appendChild(flame37);
    Flame1.appendChild(flame38);
    Flame1.appendChild(flame41);
    Flame1.appendChild(flame42);
    Flame1.appendChild(flame43);
    Flame1.appendChild(flame44);
    Flame1.appendChild(flame45);
    Flame1.appendChild(flame46);
    Flame1.appendChild(flame47);
    Flame1.appendChild(flame48);
    Flame1.appendChild(flame49);
    Flame1.appendChild(flame401);
    Flame1.appendChild(flame402);
    Flame1.appendChild(flame403);
    Flame1.appendChild(flame51);
    Flame1.appendChild(flame52);
    Flame1.appendChild(flame53);
    Flame1.appendChild(flame54);
    Flame1.appendChild(flame55);
    Flame1.appendChild(flame56);
    Flame1.appendChild(flame57);
    Flame1.appendChild(flame58);
    fireColor5();
}

function fireColor5() {
    var fireFlame51 = document.getElementsByClassName("fireFlame51");
    var fireFlame52 = document.getElementsByClassName("fireFlame52");
    var fireFlame53 = document.getElementsByClassName("fireFlame53");
    var fireFlame54 = document.getElementsByClassName("fireFlame54");
    var fireFlame55 = document.getElementsByClassName("fireFlame55");
    var rand = Math.random() * 5 + 1;
    if (rand >= 1 && rand <= 2) {
        for (var i = 0; i < 8; i++) {
            fireFlame51[i].style.backgroundColor = "rgb(2, 255, 2)";
            fireFlame52[i].style.backgroundColor = "rgb(2, 255, 2)";
            fireFlame53[i].style.backgroundColor = "rgb(2, 255, 2)";
            fireFlame55[i].style.backgroundColor = "rgb(2, 255, 2)";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame54[i].style.backgroundColor = "rgb(2, 255, 2)";
        }
    } else if (rand > 2 && rand <= 3) {
        for (var i = 0; i < 8; i++) {
            fireFlame51[i].style.backgroundColor = "aqua";
            fireFlame52[i].style.backgroundColor = "aqua";
            fireFlame53[i].style.backgroundColor = "aqua";
            fireFlame55[i].style.backgroundColor = "aqua";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame54[i].style.backgroundColor = "aqua";
        }
    } else if (rand > 3 && rand <= 4) {
        for (var i = 0; i < 8; i++) {
            fireFlame51[i].style.backgroundColor = "pink";
            fireFlame52[i].style.backgroundColor = "pink";
            fireFlame53[i].style.backgroundColor = "pink";
            fireFlame55[i].style.backgroundColor = "pink";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame54[i].style.backgroundColor = "pink";
        }
    } else if (rand > 4 && rand <= 5) {
        for (var i = 0; i < 8; i++) {
            fireFlame51[i].style.backgroundColor = "red";
            fireFlame52[i].style.backgroundColor = "red";
            fireFlame53[i].style.backgroundColor = "red";
            fireFlame55[i].style.backgroundColor = "red";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame54[i].style.backgroundColor = "red";
        }
    } else if (rand > 5 && rand <= 6) {
        for (var i = 0; i < 8; i++) {
            fireFlame51[i].style.backgroundColor = "purple";
            fireFlame52[i].style.backgroundColor = "purple";
            fireFlame53[i].style.backgroundColor = "purple";
            fireFlame55[i].style.backgroundColor = "purple";
        }
        for (var i = 0; i < 13; i++) {
            fireFlame54[i].style.backgroundColor = "purple";
        }
    }
}

function fireDown() {
    // var time1 = 13 + Math.random() * 3 - 1 + "s";
    // var time2 = 13 + Math.random() * 3 - 1 + "s";
    // var time3 = 13 + Math.random() * 3 - 1 + "s";
    // var time4 = 13 + Math.random() * 3 - 1 + "s";
    // var time5 = 13 + Math.random() * 3 - 1 + "s";
    // document.getElementById("fireWork1").style.animationDelay = time1;
    // document.getElementById("fireWork2").style.animationDelay = time2;
    // document.getElementById("fireWork3").style.animationDelay = time3;
    // document.getElementById("fireWork4").style.animationDelay = time4;
    // document.getElementById("fireWork5").style.animationDelay = time5;
}
// window.onload = fire();
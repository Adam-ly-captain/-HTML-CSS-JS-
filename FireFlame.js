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
    } else if (times % 5 == 0 && !flag) {
        var start_time = new Date();
        var delay_time1 = (1 + Math.random() * 3 - 1) * 1000;
        var delay_time2 = (1 + Math.random() * 3 - 1) * 1000;
        var delay_time3 = (1 + Math.random() * 3 - 1) * 1000;
        var delay_time4 = (1 + Math.random() * 3 - 1) * 1000;
        var delay_time5 = (1 + Math.random() * 3 - 1) * 1000;
        document.body.appendChild(firework1);
        setTimeout(fireShow1, delay_time1 + 2000);
        document.body.appendChild(firework2);
        document.body.appendChild(firework3);
        document.body.appendChild(firework4);
        document.body.appendChild(firework5);
        firework1.style.animationDelay = delay_time1 + "ms";
        firework2.style.animationDelay = delay_time2 + "ms";
        firework3.style.animationDelay = delay_time3 + "ms";
        firework4.style.animationDelay = delay_time4 + "ms";
        firework5.style.animationDelay = delay_time5 + "ms";
    }
    times++;
    if (times == 48) {

    }

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
    var fireFlame1 = document.getElementsByClassName("fireFlame1");
    var fireFlame2 = document.getElementsByClassName("fireFlame2");
    var fireFlame3 = document.getElementsByClassName("fireFlame3");
    var fireFlame3 = document.getElementsByClassName("fireFlame4");
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
    var rand = Math.random() * 5 + 1;
    document.body.appendChild(Flame1);
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
    for (var i = 0; i < 8; i++) {
        fireFlame1[i].style.backgroundColor = "rgb(223, 156, 13)";
        fireFlame2[i].style.backgroundColor = "rgb(255, 255, 5)";
        fireFlame3[i].style.backgroundColor = "aqua";
        fireFlame4[i].style.backgroundColor = "reds";
    }
    if (rand1 >= 1 && rand1 <= 2) {
        
    } else if (rand1 > 2 && rand1 <= 3) {
        
    } else if (rand1 > 3 && rand1 <= 4) {
        
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
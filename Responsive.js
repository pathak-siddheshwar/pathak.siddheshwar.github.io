console.log("hey i m started");

// var a = document.getElementsByClassName("bot_content");
// var b = document.getElementsByClassName("bot_button");
// var flag = 0;

// b[0].addEventListener('click', function() {
//     if (flag == 0) {
//         a[0].style.display = "block";
//         flag = 1;
//     } else if (flag == 1) {
//         a[0].style.display = "none";
//         flag = 0;
//     }
// })



// var a = document.getElementsByClassName('navbar');
// var b = document.getElementsByClassName('link');
// var c = document.getElementById('hamburger');
// var d = document.getElementsByClassName('navitem');
// var flag = 0;
// c.addEventListener('click', function() {
//     if (flag == 0) {
//         a[0].style.height = "240px";
//         a[0].style.display = "flex";
//         a[0].style.flexDirection = "column";
//         for (i = 0; i < b.length; i++) {
//             b[i].style.display = "block";
//         }
//         flag = 1;
//     } else if (flag == 1) {
//         for (i = 0; i < b.length; i++) {
//             b[i].style.display = "none";
//             a[0].style.height = "60px";
//             a[0].style.display = "flex";
//             a[0].style.flexDirection = "row";
//             flag = 0;
//         }
//     }
// })



var n = document.getElementById("topnav");
var btn = document.getElementById("button");
btn.addEventListener('click', function() {
    n.classList.toggle("responsive");
    // if (n.className == "navbar") {
    //     n.className += " responsive";
    // } else {
    //     n.className = "navbar";
    // }
})





// var indicator = 0;

// var bMobile = // will be true if running on a mobile device
//     navigator.userAgent.indexOf("Mobile") !== -1 ||
//     navigator.userAgent.indexOf("iPhone") !== -1 ||
//     navigator.userAgent.indexOf("Android") !== -1 ||
//     navigator.userAgent.indexOf("Windows Phone") !== -1;


// if (bMobile) {
//     document.getElementsByClassName("footer")[0].style.marginBottom = "90px";
//     console.log("its mobile view");
//     indicator = 1;
// } else {
//     document.getElementsByClassName("footer")[0].style.marginBottom = "0px";
//     indicator = 0;
// }


function myFunction() {
    var w = window.innerWidth;
    if (w > 600) {
        n.classList.remove("responsive");
    }
}

var drop = document.getElementById("drop");
var bts = document.getElementsByClassName("dropdown-button");
var content = document.getElementsByClassName("dropdown-content");
var flag = 0;
drop.addEventListener("click", function() {
    if (flag == 0) {
        for (i = 0; i < content.length; i++) {
            content[i].style.display = "block";
            // this.style.backgroundColor = "#ddd";
            // this.style.color = "black";
        }
        flag = 1;
    } else if (flag == 1) {
        for (i = 0; i < content.length; i++) {
            content[i].style.display = "none";
            // this.style.backgroundColor = "#333";
            // this.style.color = "snow";
        }
        flag = 0;
    }

})
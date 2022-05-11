var picid = 3;
const picnum = 8;

$(document).ready(function () {
    window.addEventListener("scroll", function () {
        var elem = document.getElementsByClassName("navbar");
        var navtext = document.getElementsByClassName("navbarfont");

        var total = document.body.scrollHeight - window.screen.availHeight;
        var a = 255;
        a = a - window.scrollY / 4;
        a = Math.ceil(a);
        flaga = false;
        flagb = false;
        if (window.scrollY > 200) {
            if (flaga == false) {
                elem[0].style.background = "white";
                elem[0].style.height = "10vh";
                elem[0].animate({ "height": "10vh" }, 1000);
                for (var i = 0; i < navtext.length; i++) {
                    navtext[i].style.fontSize = 35 + 'px';
                }
                flaga = true;
            }
            flagb = false;

        } else {
            if (flagb == false) {
                elem[0].style.background = "white";
                //elem[0].style.height = "100vh";
                elem[0].animate({ "height": "16vh" }, 1000);
                elem[0].style.height = "16vh";
                for (var i = 0; i < navtext.length; i++) {
                    navtext[i].style.fontSize = 40 + 'px';
                }
                flagb = true;
            }
            flaga = false;
        }
    })


    $(document).ready(function () {

        $("#prev").click(function () {
        picid = (picid - 1 + 8) % picnum;
        $(".picshow").attr("src", "img/honor/" + String(picid) + ".jpg");
        console.log(picid);
    })
    $("#next").click(function () {
        picid = (picid + 1) % picnum;
        $(".picshow").attr("src", "img/honor/" + String(picid) + ".jpg");
    })
    $(".picshow").click(function () {
        picid = (picid - 1 + 8) % picnum;
        $(".picshow").attr("src", "img/honor/" + String(picid) + ".jpg");
    })
        // Check for click events on the navbar burger icon

    });
    $(".navbar-burger").click(function () {
        let menu = $(".navbar-menu");
        if (menu.hasClass("is-active")) {
            menu.removeClass("is-active");
        } else {
            menu.addClass("is-active");
        }
    })


});

// ---------------------------------------------------------
// ----------------------- LOADER --------------------------
// ---------------------------------------------------------

$(document).ready(function () {

    setTimeout(function () {
        $('#loader-wrapper').addClass('loaded');
        $('#loader').addClass('loaded');
        $('.loader-section section-left').addClass('loaded');
        $('.loader-section section-right').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 3000);
});

// -------------------- SHOW-HIDE MENU -------------------

$(document).ready(function () {
    $("button").click(function () {
        $("#navigation").toggleClass("main");
        $(".button").toggleClass("active-btn");
        $("#main-page").toggleClass("active");
        $("#about").toggleClass("active-about");
        $("#abilities").toggleClass("active-abilities");
        $(".leftPart").toggleClass("activeLeftPart");
        $("#services").toggleClass("active-services");
        $("#portfolio").toggleClass("active-portfolio");
        $("#testimonials").toggleClass("active-testimonials");
        $("#numbers").toggleClass("active-numbers");
        $("#news").toggleClass("active-news");
        $("#contact").toggleClass("active-contact");
        $("footer").toggleClass("active-footer");
        $("#gallery").toggleClass("active-gallery");
    });
});


// ------------------------------------------------------------------
// --------------------- SECTION 1 ----------------------------------
// ------------------------------------------------------------------

// -------------------- BUTTON SCROLL TO THE TOP --------------------
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// ------------------------------------------------------------------
// ----------------- NAVIGATION - SMARTPHONE ------------------------
// ------------------------------------------------------------------
$(document).ready(function () {
    $(".cross").hide();
    $(".menuNew").hide();
    $(".hamburger").click(function () {
        $(".menu").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function () {
        $(".menuNew").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });
});

// ------------------------------------------------------------------
// ------------------ SECTION 2 - MAIN PAGE--------------------------
// ------------------------------------------------------------------

// -------------------- MAIN PAGE - TEXT-TYPING ---------------------

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});


// ------------------------------------------------------------------
// --------------------- SECTION 3 ----------------------------------
// ------------------------------------------------------------------

// ---------------------- PROGRESS BAR ------------------------------
$(function () {
    $(".progress > span").each(function () {
        $(this)
            .data("width", $(this).width())
            .width(0)
            .animate({
                width: $(this).data("width")
            }, 1500);
    });
});

// ------------------------------------------------------------------
// --------------------- SECTION 6 ----------------------------------
// ------------------------------------------------------------------

// ------------------- SWITCHING PHOTOS IN GALLERY ------------------
$(".top-tab li").click(function () {
    $(".sub-tab > li").css({ 'display': 'none' });
    $(".sub-tab li[data-menu=" + $(this).data('menu') + "]").css({ 'display': 'block' });
    $(".filter li").hide(200);
    $(".filter li[data-filter=" + $(this).data('menu') + "]").delay(300).show(300);
    console.log($(".sub-tab li[data-menu='" + $(this).data('menu') + "']"));
});

$(".sub-tab li").click(function (e) {
    e.stopPropagation();
    $(".filter li").hide(200);
    $(".filter li[data-filter=" + $(this).data('menu') + "]").delay(300).show(300);
});

// ------------------------------------------------------------------
// -------------- SECTION 7 - TESTIMONIALS --------------------------
// ------------------------------------------------------------------

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: false,
        center: true,
        margin: 50,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            // 600: {
            //     items: 3
            // },
            // 1000: {
            //     items: 5
            // }
        }
    })
});

// ------------------------------------------------------------------
// --------------------- SECTION 8 ----------------------------------
// ------------------------------------------------------------------

// -------------- COUNTING TO THE NUMBER ----------------------------
$('#numbers .container .number .fuse h3').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// ------------------------------------------------------------------
// -------------- SMOOTH PAGES SCROLLING EFFECT ---------------------
// ------------------------------------------------------------------
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// --------------------------------------
AOS.init();
// --------------------------------------

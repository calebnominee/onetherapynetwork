$(function() {
    var slider = $("#slider").bxSlider({
        controls: !1,
        auto: !0,
        touchEnabled: !1,
        pause: 6e3,
        adaptiveHeight: !0
    });
    $(window).on('resize', function() {
	    slider.reloadSlider();
    });
    document.body.classList.remove("is-loading");
    var e, a = !1;
    /webkit.*mobile/i.test(navigator.userAgent) && (a = !0,
    (e = jQuery).fn.offsetOld = e.fn.offset,
    e.fn.offset = function() {
        var e = this.offsetOld();
        return e.top -= window.scrollY,
        e.left -= window.scrollX,
        e
    }
    );
    var n = document.getElementsByClassName("-animation-trigger")
      , i = $(window).outerHeight()
      , t = ($(window).outerWidth(),
    $(window).scrollTop());
    if (window.onresize = function() {
        i = $(window).outerHeight()
    }
    ,
    0 < n.length) {
        var o = i + t - i;
        $(n).each(function() {
            r(this).y < o && $(this).removeClass("-animation-trigger").removeClass("split-fade-container").trigger("classChange")
        })
    }
    function s() {
        var e = $(window).scrollTop();
        if (0 < n.length) {
            var t = i + e - .3 * i;
            $(n).each(function() {
                r(this).y < t && $(this).removeClass("-animation-trigger").trigger("classChange")
            })
        }
        trigger = !1
    }
    function r(e) {
        for (var t = 0, n = 0; e; )
            t += e.offsetLeft - e.scrollLeft + e.clientLeft,
            n += a ? $(e).offset().top : e.offsetTop - e.scrollTop + e.clientTop,
            e = e.offsetParent;
        return {
            x: t,
            y: n
        }
    }
    var c = document.getElementById("main-header");
    document.getElementById("fixed-header"),
    $(c).outerHeight();
    s();
    var l = !1;
    if (window.onscroll = function() {
        l = !0
    }
    ,
    setInterval(function() {
        l && (s(),
        function() {
            if (w) {
                w = !1;
                var e = $(window).scrollTop();
                p + 25 < e ? c.classList.add("-hidden") : e < p + 25 && c.classList.remove("-hidden"),
                p = e,
                w = !0
            }
        }(),
        l = !1)
    }, 50),
    $(".split-fade-container").each(function() {
        var e = this.textContent
          , t = ""
          , n = e.split("");
        $(n).each(function(e) {
            t += '<span class="split-fade -hold">' + this + "</span>"
        }),
        this.innerHTML = t,
        $(this).on("classChange", function() {
            !function t(n, e, a) {
                var i = n[a];
                i.classList.remove("-hold");
                setTimeout(function() {
                    a++;
                    var e = i.nextSibling;
                    e && t(n, "-hold", a)
                }, 20)
            }(this.querySelectorAll(".split-fade"), 0, 0)
        })
    }),
    640 < window.outerWidth) {
        var d = new ScrollMagic.Controller;
        0 < $(".pin1").length && $(".pin1").each(function() {
            var e = TweenMax.fromTo(this, 1, {
                transform: "translateY(70px)"
            }, {
                transform: "translateY(-70px)",
                ease: Linear.easeNone
            });
            new ScrollMagic.Scene({
                triggerElement: this,
                duration: "120%",
                triggerHook: "onEnter"
            }).setTween(e).addTo(d)
        }),
        0 < $(".pin2").length && $(".pin2").each(function() {
            var e = TweenMax.fromTo(this, 1, {
                transform: "translateY(50px)"
            }, {
                transform: "translateY(-50px)",
                ease: Linear.easeNone
            });
            new ScrollMagic.Scene({
                triggerElement: this,
                duration: "120%",
                triggerHook: "onEnter"
            }).setTween(e).addTo(d)
        }),
        0 < $(".pin-subtle-3").length && $(".pin-subtle-1").each(function() {
            var e = TweenMax.fromTo(this, 1, {
                transform: "translateY(10px)"
            }, {
                transform: "translateY(-10px)",
                ease: Linear.easeNone
            });
            new ScrollMagic.Scene({
                triggerElement: this,
                duration: "120%",
                triggerHook: "onEnter"
            }).setTween(e).addTo(d)
        }),
        0 < $(".pin-subtle-2").length && $(".pin-subtle-2").each(function() {
            var e = TweenMax.fromTo(this, 1, {
                transform: "translateY(20px)"
            }, {
                transform: "translateY(-20px)",
                ease: Linear.easeNone
            });
            new ScrollMagic.Scene({
                triggerElement: this,
                duration: "120%",
                triggerHook: "onEnter"
            }).setTween(e).addTo(d)
        }),
        0 < $(".pin-subtle-3").length && $(".pin-subtle-3").each(function() {
            var e = TweenMax.fromTo(this, 1, {
                transform: "translateY(30px)"
            }, {
                transform: "translateY(-30px)",
                ease: Linear.easeNone
            });
            new ScrollMagic.Scene({
                triggerElement: this,
                duration: "100%",
                triggerHook: "onEnter"
            }).setTween(e).addTo(d)
        }),
        0 < $(".image-inner").length && $(".image-inner").each(function() {
            var e = TweenMax.fromTo(this, 1, {
                transform: "translateY(10%)"
            }, {
                transform: "translateY(-10%)",
                ease: Linear.easeNone
            });
            new ScrollMagic.Scene({
                triggerElement: this,
                duration: "130%",
                triggerHook: "onEnter"
            }).setTween(e).addTo(d)
        })
    }
    var g = document.getElementById("parallax-fade")
      , m = document.getElementById("par-trigger")
      , u = new ScrollMagic.Controller;
    if (h) {
        var h = TweenMax.fromTo(g, 1, {
            opacity: "1"
        }, {
            opacity: ".1"
        });
        new ScrollMagic.Scene({
            triggerElement: m,
            duration: "100%",
            triggerHook: "onLeave"
        }).setTween(h).addTo(u)
    }
    if (0 < n.length) {
        o = i + t - .3 * i;
        $(n).each(function() {
            r(this).y < o && $(this).removeClass("-animation-trigger").trigger("classChange")
        })
    }
    $(".dropdown").on("click", function() {
        this.classList.toggle("-active")
    });
    var f = document.getElementById("main-menu")
      , v = document.getElementById("page-overlay");
    $("[data-menu]").on("click", function() {
        var e = this.getAttribute("data-menu");
        "open" == e ? (document.body.classList.add("-is-locked"),
        v.classList.add("-is-active"),
        f.classList.add("-is-active")) : "close" == e ? (document.body.classList.remove("-is-locked"),
        v.classList.remove("-is-active"),
        f.classList.remove("-is-active")) : (document.body.classList.toggle("-is-locked"),
        v.classList.toggle("-is-active"),
        f.classList.toggle("-is-active"))
    });
    c = document.getElementById("main-header");
    var p = $(window).scrollTop()
      , w = !0;
    var L = document.querySelector("[data-tab]");
    document.getElementById("path-container");
    if (L) {
        var T = L.getAttribute("data-tab")
          , y = document.getElementById(T);
        document.querySelector(".inner-section", y).offsetHeight
    }
    $("[data-tab]").on("click", function() {
        var t = this.getAttribute("data-tab")
          , n = document.getElementById(t);
        $("[data-tab]").each(function() {
            this.classList.remove("-active")
        }),
        this.classList.add("-active"),
        $(".inner-section").each(function() {
            var e = this;
            e != n ? (e.classList.add("-animation-hold"),
            setTimeout(function() {
                e.classList.add("hide")
            }, 2e3)) : setTimeout(function() {
                e.classList.remove("hide"),
                setTimeout(function() {
                    e.classList.remove("-animation-hold")
                }, 50)
            }, 1950)
        }),
        $(".inner-section-drop").each(function() {
            this.classList.remove("-shown"),
            this.classList.remove("-clip-path")
        }),
        $("[data-target]").each(function() {
            var e = $(this).data("target");
            t == e ? this.classList.add("-active") : this.classList.remove("-active")
        })
    }),
    $("[data-drop]").on("click", function() {
        var e = this.getAttribute("data-drop")
          , t = document.getElementById(e);
        !!t.classList.contains("-shown") ? (this.innerHTML = "Continue Reading <span class='dropdown-arrow'></span>",
        t.classList.remove("-shown"),
        setTimeout(function() {
            t.classList.remove("-clip-path")
        }, 300)) : (this.innerHTML = "Read Less <span class='dropdown-arrow reversed'></span>",
        t.classList.add("-shown"),
        setTimeout(function() {
            t.classList.add("-clip-path")
        }, 300))
    }),
    $("[data-bio]").on("click", function() {
        var e = this.getAttribute("data-bio")
          , t = document.getElementById(e);
        document.body.classList.toggle("-is-locked"),
        t.classList.toggle("-active")
    })
});

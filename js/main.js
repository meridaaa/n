(function ($) {
  "use strict";

  /*==================================================================
    [ Load page ]*/
  try {
    $(".animsition").animsition({
      inClass: "fade-in",
      outClass: "fade-out",
      inDuration: 1500,
      outDuration: 800,
      linkElement: ".animsition-link",
      loading: true,
      loadingParentElement: "html",
      loadingClass: "animsition-loading-1",
      loadingInner: '<div class="loader05"></div>',
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: ["animation-duration", "-webkit-animation-duration"],
      overlay: false,
      overlayClass: "animsition-overlay-slide",
      overlayParentElement: "html",
      transition: function (url) {
        window.location.href = url;
      },
    });
  } catch (er) {
    console.log(er);
  }

  /*==================================================================
    [ Back to top ]*/
  try {
    var windowH = $(window).height() / 2;

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > windowH) {
        $("#myBtn").addClass("show-btn-back-to-top");
      } else {
        $("#myBtn").removeClass("show-btn-back-to-top");
      }
    });

    $("#myBtn").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 300);
    });
  } catch (er) {
    console.log(er);
  }

  /*==================================================================
    [ Fixed menu ]*/
  try {
    var posNav = $(".wrap-main-nav").offset().top;
    var menuDesktop = $(".container-menu-desktop");
    var mainNav = $(".main-nav");
    var lastScrollTop = 0;
    var st = 0;

    $(window).on("scroll", function () {
      fixedHeader();
    });

    $(window).on("resize", function () {
      fixedHeader();
    });

    $(window).on("load", function () {
      fixedHeader();
    });

    var fixedHeader = function () {
      st = $(window).scrollTop();

      if (st > posNav + mainNav.outerHeight()) {
        $(menuDesktop).addClass("fix-menu-desktop");
      } else if (st <= posNav) {
        $(menuDesktop).removeClass("fix-menu-desktop");
      }

      if (st > lastScrollTop) {
        $(mainNav).removeClass("show-main-nav");
      } else {
        $(mainNav).addClass("show-main-nav");
      }

      lastScrollTop = st;
    };
  } catch (er) {
    console.log(er);
  }

  /*==================================================================
    [ Menu mobile ]*/
  try {
    $(".btn-show-menu-mobile").on("click", function () {
      $(this).toggleClass("is-active");
      $(".menu-mobile").slideToggle();
    });

    var arrowMainMenu = $(".arrow-main-menu-m");

    for (var i = 0; i < arrowMainMenu.length; i++) {
      $(arrowMainMenu[i]).on("click", function () {
        $(this).parent().find(".sub-menu-m").slideToggle();
        $(this).toggleClass("turn-arrow-main-menu-m");
      });
    }

    $(window).on("resize", function () {
      if ($(window).width() >= 992) {
        if ($(".menu-mobile").css("display") === "block") {
          $(".menu-mobile").css("display", "none");
          $(".btn-show-menu-mobile").toggleClass("is-active");
        }

        $(".sub-menu-m").each(function () {
          if ($(this).css("display") === "block") {
            $(this).css("display", "none");
            $(arrowMainMenu).removeClass("turn-arrow-main-menu-m");
          }
        });
      }
    });
  } catch (er) {
    console.log(er);
  }

  /*==================================================================
    [ Respon tab01 ]*/
  try {
    $(".tab01").each(function () {
      var tab01 = $(this);
      var navTabs = $(this).find(".nav-tabs");
      var dropdownMenu = $(tab01).find(
        ".nav-tabs>.nav-item-more .dropdown-menu"
      );
      var navItem = $(tab01).find(".nav-tabs>.nav-item");

      var navItemSize = [];
      var size = 0;
      var wNavItemMore = 0;

      $(window).on("load", function () {
        navItem.each(function () {
          size += $(this).width();
          navItemSize.push(size);
        });

        responTab01();
      });

      $(window).on("resize", function () {
        responTab01();
      });

      var responTab01 = function () {
        if (navTabs.width() <= navItemSize[navItemSize.length - 1] + 1) {
          $(tab01).find(".nav-tabs>.nav-item-more").removeClass("dis-none");
        } else {
          $(tab01).find(".nav-tabs>.nav-item-more").addClass("dis-none");
        }

        wNavItemMore = $(tab01)
          .find(".nav-tabs>.nav-item-more")
          .hasClass("dis-none")
          ? 0
          : $(tab01).find(".nav-tabs>.nav-item-more").width();

        for (var i = 0; i < navItemSize.length; i++) {
          if (navTabs.width() - wNavItemMore <= navItemSize[i] + 1) {
            $(tab01).find(".nav-tabs .nav-item").remove();

            for (var j = i - 1; j >= 0; j--) {
              $(navTabs).prepend($(navItem[j]).clone());
            }

            for (var j = i; j < navItemSize.length; j++) {
              $(dropdownMenu).append($(navItem[j]).clone());
            }

            break;
          } else {
            $(tab01).find(".nav-tabs .nav-item").remove();

            for (var j = i; j >= 0; j--) {
              $(navTabs).prepend($(navItem[j]).clone());
            }
          }
        }
      };
    });
  } catch (er) {
    console.log(er);
  }

  /*==================================================================
    [ Play video 01 ]*/
  try {
    var srcOld = $(".video-mo-01").children("iframe").attr("src");

    $('[data-target="#modal-video-01"]').on("click", function () {
      $(".video-mo-01").children("iframe")[0].src += "&autoplay=1";

      setTimeout(function () {
        $(".video-mo-01").css("opacity", "1");
      }, 300);
    });

    $('[data-dismiss="modal"]').on("click", function () {
      $(".video-mo-01").children("iframe")[0].src = srcOld;
      $(".video-mo-01").css("opacity", "0");
    });
  } catch (er) {
    console.log(er);
  }

  /*==================================================================
    [ Tab mega menu ]*/
  try {
    $(window).on("load", function () {
      $(".sub-mega-menu .nav-pills > a").hover(function () {
        $(this).tab("show");
      });
    });
  } catch (er) {
    console.log(er);
  }

  /*==================================================================
    [ Slide100 txt ]*/

  try {
    $(".slide100-txt").each(function () {
      var slideTxt = $(this);
      var itemSlideTxt = $(this).find(".slide100-txt-item");
      var data = [];
      var count = 0;
      var animIn = $(this).data("in");
      var animOut = $(this).data("out");

      for (var i = 0; i < itemSlideTxt.length; i++) {
        data[i] = $(itemSlideTxt[i]).clone();
        $(data[i]).addClass("clone");
      }

      $(window).on("load", function () {
        $(slideTxt).find(".slide100-txt-item").remove();
        $(slideTxt).append($(data[0]).clone());
        $(slideTxt)
          .find(".slide100-txt-item.clone")
          .addClass(animIn + " visible-true");
        count = 0;
      });

      setInterval(function () {
        $(slideTxt)
          .find(".slide100-txt-item.ab-t-l." + animOut)
          .remove();
        $(slideTxt)
          .find(".slide100-txt-item")
          .addClass("ab-t-l " + animOut);

        if (count >= data.length - 1) {
          count = 0;
        } else {
          count++;
        }

        $(slideTxt).append($(data[count]).clone());
        $(slideTxt)
          .find(".slide100-txt-item.clone")
          .addClass(animIn + " visible-true");
      }, 5000);
    });
  } catch (er) {
    console.log(er);
  }

  (featureNews = () => {
    alert("Here!");
    const url = "http://37.32.29.134:3000/api/v1/news/interested?limit=4";
    fetch(url)
      .then((data) => data.json())
      .then((news) => {
        news.array.forEach((element, idx) => {
          const fNews = document.getElementById("featureNews");
          const div = document.createElement("div");
          div.classList.add("col-md-6 p-rl-1 p-b-2");
          const how2 = document.createElement("h2");
          h2.innetText = "How";
          div.appendChild(h2);
          fNews.appendChild(div);
          if (idx === 0) {
            const fNews = document.getElementById("featureNews");
            const div = document.createElement("div");
            div.classList.add("col-md-6 p-rl-1 p-b-2");
            const how2 = document.createElement("h2");
            h2.innetText = "How";
            div.appendChild(h2);
            fNews.appendChild(div);
          } else {
            const fNews = document.getElementById("featureNews");
            const div = document.createElement("div");
            div.classList.add("col-md-6 p-rl-1");

            fNews.appendChild(div);
            const div_3 = document.createElement("div");
            div_3.classList.add("row m-rl--1");
            div.classList.add("div_3");
          }

          // let image = array[Math.floor(Math.random() * array.length)]
          const div1 = document.createElement("div");
          div1.classList.add("bg-img1 how1 pos-relative");
          div.style.backgroundImage =
            images[Math.floor(Math.random() * images.length)];
          div.appendChild(div1);

          const a = document.createElement("a");
          a.classList.add(
            "dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
          );
          a.innerHTML = element.subjects;
          div1.appendChild(a);

          const h3 = document.createElement("h3");
          h3.classList.add("how1-child2 m-t-14 m-b-10");
          h3.innetText = element.title;
          div1.appendChild(h3);

          const a1 = document.createElement("a");
          a1.classList.add(
            "dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
          );
          a1.innerHTML = element.title;
          div1.appendChild(a1);

          const span = document.createElement("span");
          span.classList.add("how1-child2");
          div1.appendChild(span);

          const span1 = document.createElement("span");
          span1.classList.add("f1-s-4 cl11");
          span1.innerHTML = element.writer;
          span.appendChild(span1);

          const span2 = document.createElement("span");
          span2.classList.add("f1-s-4 cl11");
          span2.innerHTML = element.createdAt;
          span.appendChild(span2);
        });
        // const div = document.createElement('div');
        //  div.id = 'featureid';
        //  const a = document.createElement('a');
        //  a.innerHTML = news.subjects
        //  div.appendChild(a)

        //  const h3 = document.createElement('h3');
        //  h3.innetText = news.title;
        //  const a = document.createElement('a');
        //  a.innerHTML = news.subjects
      });
  })();

//   posts_head = () => {
//     const url = "http://37.32.29.134:3000/api/v1/news/interested?limit=4";
//     fetch(url)
//       .then((data) => data.json())
//       .then((news) => {
//         news.array.forEach((element, idx, arr) => {
//           const div = document.createElement("div");
//           div.classList.add(
//             "tab01-head how2 how2-cl1 bocl12 flex-s-c m-r-10 m-r-0-sr991"
//           );

//           const h3 = document.createElement("h3");
//           h3.innetText = news.subjects;
//           div.appendChild(h3);
//         });
//       });
//   };

//   posts = () => {
//     const url = "http://37.32.29.134:3000/api/v1/news/interested?limit=4";
//     fetch(url)
//       .then((data) => data.json())
//       .then((news) => {
//         const div = document.createElement("div");
//         div.classList.add("tab01 p-b-20");

//         const div1 = document.createElement("div");
//         div1.classList.add(
//           "tab01-head how2 how2-cl1 bocl12 flex-s-c m-r-10 m-r-0-sr991"
//         );
//         div.appendChild(div1);

//         const h3 = document.createElement("h3");
//         h3.innetText = news.subjects;
//         div1.appendChild(h3);
//       });
//   };
//   itemPosts = () => {
//     const url = "http://37.32.29.134:3000/api/v1/news/intrested?limit=4";
//     fetch(url)
//       .then((data) => data.json())
//       .then((news) => {
//         const div = document.createElement("div");
//         div.classList.add("col-sm-6 p-r-25 p-r-15-sr991");

//         const div1 = document.createElement("div");
//         div1.classList.add("m-b-30");
//         div.appendChild(div1);

//         const a = document.createElement("a");
//         a.classList.add("f1-m-3 cl2 hov-cl10 trans-03");
//         //href************************
//         div1.appendChild(a);

//         const img1 = document.createElement("image");
//         img1.src = images[Math.floor(Math.random() * images.length)];
//         img1.alt = "IMG";
//         a.appendChild(img1);

//         const div2 = document.createElement("div");
//         div2.classList.add("p-t-20");
//         div.appendChild(div2);

//         const h5 = document.createElement("h5");
//         h5.classList.add("p-b-5");
//         div2.appendChild(h5);

//         const a1 = document.createElement("a");
//         a1.innerHTML = news.subjects;
//         a1.classList.add("f1-m-3 cl2 hov-cl10 trans-03");
//         a.innerHTML = news.subjects;
//         //href************************
//         h5.appendChild(a1);

//         ////////////////////////////////
//         const span = document.createElement("span");
//         span.classList.add("cl8");
//         div1.appendChild(span);

//         const span1 = document.createElement("span");
//         span1.classList.add("f1-s-3");
//         span1.innerHTML = element.createdAt;
//         span.appendChild(span1);
//         ////////////////////////////////
//       });
//   };
//   window.onload = () => {
//     featureNews();
//   };

//   initFunction = () => {
//     window.onload = () => {
//       featureNews();
//     };
//   };
})(jQuery);

const images = [
  "https://i.iheart.com/v3/re/new_assets/62cdea619d5653a1a5997a72?ops=gravity(%22north%22)%2Ccover(1440%2C808)",
  "https://www.chinadaily.com.cn/photo/images/attachement/jpg/site1/20170918/d8cb8a5155b01b297c550d.jpg",
  "https://rnz-ressh.cloudinary.com/image/upload/s--vyGlIPeT--/ar_16:10,c_fill,f_auto,g_auto,q_auto,w_1050/4LQ6J1N_VOLLEY_jpg",
  "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iphone_14_pro_lgd_1.jpg",
  "https://www.apple.com/macbook-pro-14-and-16/",
  "https://variety.com/wp-content/uploads/2022/06/AP22147743528555-1.jpg?w=681&h=383&crop=1",
];

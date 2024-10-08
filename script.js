$(document).ready(function () {
    function calculateImageSize() {
        var $img = $(".standard");
        var $container = $img.parent();

        var containerWidth = $container.width();
        var containerHeight = $container.height();

        var naturalWidth = $img[0].naturalWidth;
        var naturalHeight = $img[0].naturalHeight;

        // حساب النسبة
        var widthRatio = containerWidth / naturalWidth;
        var heightRatio = containerHeight / naturalHeight;
        var scale = Math.min(widthRatio, heightRatio);

        // العرض والارتفاع بعد التحجيم
        var fittedWidth = naturalWidth * scale;
        var fittedHeight = naturalHeight * scale;

        // console.log('Width: ' + fittedWidth + 'px, Height: ' + fittedHeight + 'px');


        $(".dimensions").css({ "width": fittedWidth + 'px', "height": fittedHeight + 'px' })
        $(".num").css({ "width": (fittedWidth * (46.63 / 1080)) + 'px ', "padding": "0px" })


        // حساب حجم الخط بناءً على أصغر بُعد
        var minDimension = Math.min(fittedWidth, fittedHeight);
        var fontSizeMainTitle = minDimension * 0.07;
        var fontSizeMidTitle = minDimension * 0.05;
        var fontSizeBannerParag = minDimension * 0.032;
        var fontSizeMoltakaParag = minDimension * 0.035;
        var fontSizeGoalBoxNum = minDimension * 0.02;
        var fontSizeKorsyParag = minDimension * 0.029;
        var fontSizeMarsadParag = minDimension * 0.031;
        var fontSizeTrainning1Parag = minDimension * 0.025;
        var fontSizeGoalBoxText = minDimension * 0.024;

        $(".hero .main-page .banner-box .main-title").css("font-size", fontSizeMainTitle + 'px')
        $(".mid-title").css("font-size", fontSizeMidTitle + 'px')
        $(".mid-title-en").css("font-size", (fontSizeMidTitle * 3.5  /5) + 'px')
        $(".hero .main-page .banner-box p").css("font-size", fontSizeBannerParag + 'px')
        $(".hero .main-page .banner-box button").css("font-size", fontSizeBannerParag + 'px')
        $(".back-btn").css("font-size", fontSizeBannerParag + 'px')
        $(".branch p").css("font-size", fontSizeBannerParag + 'px')
        $(".branch .qr-box p").css("font-size", fontSizeBannerParag + 'px')
        $(".moltaka p").css("font-size", fontSizeMoltakaParag + 'px')
        $(".moltaka-en p").css("font-size", (fontSizeMoltakaParag * 4 / 5) + 'px')
        $(".goal-box .num").css("font-size", fontSizeGoalBoxNum + 'px')
        $(".korsy p").css("font-size", fontSizeKorsyParag + 'px')
        $(".korsy-en p").css("font-size", (fontSizeKorsyParag * 3.5 / 5) + 'px')
        $(".marsad p").css("font-size", fontSizeMarsadParag + 'px')
        $(".marsad-en p").css("font-size", (fontSizeMarsadParag * 3.5 / 5) + 'px')
        $(".trainning1 p").css("font-size", fontSizeTrainning1Parag + 'px')
        $(".trainning1-en p").css("font-size", fontSizeTrainning1Parag + 'px')
        $(".quality-en p").css("font-size", (fontSizeTrainning1Parag * 4.7 / 5) + 'px')
        $(".goal-box p").css("font-size", fontSizeGoalBoxText + 'px')
        $(".trainning1-en .goal-box p").css("font-size", (fontSizeGoalBoxText * 4 / 5) + 'px')
        $(".goals-con-en .goal-box p").css("font-size", (fontSizeGoalBoxText * 4 / 5) + 'px')
        $(".hero .main-page .banner-box .btn-container button").css("font-size", (fontSizeGoalBoxText * 1.8) + 'px')
        $(".marsad p").css("font-size", (fontSizeGoalBoxText * 1.3) + 'px')
        $(".goals-container .goal-box p").css("font-size", (fontSizeGoalBoxText * .9) + 'px')
        $(".ershaad p").css("font-size", (fontSizeGoalBoxText * 1.2) + 'px')
        $(".trainning1-en p").css("font-size", (fontSizeGoalBoxText * .7) + 'px')
    }

    // أول مرة لما الصفحة تتحمل
    calculateImageSize();

    // لما يحصل تغيير في حجم الشاشة
    $(window).on('resize', function () {
        calculateImageSize();
    });


    // screens and button

    // menu

    $(".hero .main-page .banner-box .btn-container .menu-ar-btn").click(function () {
        $(".section").slideUp(800);
        $(".menu-ar").slideDown(800);
    })

    $(".hero .main-page .banner-box .btn-container .menu-en-btn").click(function () {
        $(".section").slideUp(800);
        $(".menu-en").slideDown(800);
    })
    // back btn
    $(".menu .back-btn").click(function () {
        $(".section").slideUp(800);
        $(".main-page").slideDown(800);
    })

    $(".en-mode .back-btn").click(function () {
        $(".section").slideUp(800);
        $(".menu-en").slideDown(800);
        $(".branch video").trigger("pause")
        $(".branch video").prop('currentTime', 0);
    })

    $(".ar-mode .back-btn").click(function () {
        $(".section").slideUp(800);
        $(".menu-ar").slideDown(800);
        $(".branch video").trigger("pause")
        $(".branch video").prop('currentTime', 0);
    })

    $(".menu-btn").click(function () {
        let pageTarget = $(this).attr("target")
        $(".section").slideUp(800);
        $("." + pageTarget).slideDown(800);
    })

});

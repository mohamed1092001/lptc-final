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

        // حساب حجم الخط بناءً على أصغر بُعد
        var minDimension = Math.min(fittedWidth, fittedHeight);
        var fontSizeMainTitle = minDimension * 0.07; 
        var fontSizeMidTitle = minDimension * 0.05; 
        var fontSizeBannerParag = minDimension * 0.032; 
        var fontSizeMoltakaParag = minDimension * 0.035 ; 
        var fontSizeGoalBoxNum = minDimension * 0.02 ; 
        var fontSizeKorsyParag = minDimension * 0.029; 
        var fontSizeMarsadParag = minDimension * 0.031; 
        var fontSizeTrainning1Parag = minDimension * 0.025; 
        var fontSizeGoalBoxText = minDimension * 0.024 ; 

        $(".hero .main-page .banner-box .main-title").css("font-size", fontSizeMainTitle + 'px')
        $(".mid-title").css("font-size", fontSizeMidTitle + 'px')
        $(".hero .main-page .banner-box p").css("font-size", fontSizeBannerParag + 'px')
        $(".hero .main-page .banner-box button").css("font-size", fontSizeBannerParag + 'px')
        $(".back-btn").css("font-size", fontSizeBannerParag + 'px')
        $(".branch p").css("font-size", fontSizeBannerParag + 'px')
        $(".branch .qr-box p").css("font-size", fontSizeBannerParag + 'px')
        $(".moltaka p").css("font-size", fontSizeMoltakaParag + 'px')
        $(".goal-box .num").css("font-size", fontSizeGoalBoxNum + 'px')
        $(".korsy p").css("font-size", fontSizeKorsyParag + 'px')
        $(".marsad p").css("font-size", fontSizeMarsadParag + 'px')
        $(".trainning1 p").css("font-size", fontSizeTrainning1Parag + 'px')
        $(".goal-box p").css("font-size", fontSizeGoalBoxText + 'px')
    }

    // أول مرة لما الصفحة تتحمل
    calculateImageSize();

    // لما يحصل تغيير في حجم الشاشة
    $(window).on('resize', function () {
        calculateImageSize();
    });


    // screens and button

    $(".hero .main-page .banner-box .btn-container .menu-ar-btn").click(function(){
        $(".section").slideUp(800);
        $(".menu").slideDown(800);
    })

    $(".menu .back-btn").click(function(){
        $(".section").slideUp(800);
        $(".main-page").slideDown(800);
    })
    $(".branch .back-btn").click(function(){
        $(".section").slideUp(800);
        $(".menu").slideDown(800);
        $(".branch video").trigger("pause")
        $(".branch video").prop('currentTime', 0);
    })

    $(".menu-btn").click(function(){
        let pageTarget=$(this).attr("target")
        $(".section").slideUp(800);
        $("."+pageTarget).slideDown(800);
    })

});

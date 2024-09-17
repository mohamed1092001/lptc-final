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
        var fontSizeBannerParag = minDimension * 0.032; 
        var fontSizeMoltakaParag = minDimension * 0.035 ; 

        $(".hero .main-page .banner-box .main-title").css("font-size", fontSizeMainTitle + 'px')
        $(".hero .main-page .banner-box p").css("font-size", fontSizeBannerParag + 'px')
        $(".hero .main-page .banner-box button").css("font-size", fontSizeBannerParag + 'px')
        $(".back-btn").css("font-size", fontSizeBannerParag + 'px')
        $(".branch p").css("font-size", fontSizeBannerParag + 'px')
        $(".branch .qr-box p").css("font-size", fontSizeBannerParag + 'px')
        $(".moltaka p").css("font-size", fontSizeMoltakaParag + 'px')
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

jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 100){
        jQuery('#header-wrapper').addClass("sticky");
    }
    else{
        jQuery('#header-wrapper').removeClass("sticky");
    }
});

$(function(){

    $('.m_btn').click(function(){
        $('.line').toggleClass('on');
        $('.m_menu').toggleClass('on');
    });    
    // *****************************************
    $('.sec_02_slide').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    // *****************************************
    $('.sec_03_slide').slick({
        infinite: false,
        arrows:false,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 2
    });






















});
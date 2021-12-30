$(function(){
    // **********************************************
    $('.m_btn').click(function(){
        $('.line').toggleClass('on');
        $('.m_menu').toggleClass('on');
        $('.full_menu').toggleClass('on');
        $('body,html').toggleClass('on');
        $('.full_list li a').removeClass('on');
        $('.depth2').stop().slideUp()
    });
    // **********************************************
    $(window).scroll(function(){
        var window =$(document).scrollTop();
        console.log("위치="+window);

        if(window > 200){
            $('.header').addClass('on');
        }else{
            $('.header').removeClass('on');
        }
    });
    // *****************************************
    $('.full_list li').click(function(){
        $('.full_list li a').removeClass('on');
        $(this).find('a').toggleClass('on');
        $('.depth2').stop().slideUp()
        $(this).find('.depth2').stop().slideToggle();
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
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2
    });
    // **********************************************
    $('.quick_radius').click(function(){
        $(this).find('span').toggleClass('on');
    });






















});
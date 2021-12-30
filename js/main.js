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
    let sw = 0;
    $('.quick_radius').click(function(){

        if(sw == 0){
            $(this).addClass('on');
            $('.quick_back').addClass('on');
            sw = 1;
        }else{
            $(this).removeClass('on');
            $('.quick_back').removeClass('on');
            $('.quick_back ul li a img').hide();
            
            $('.quick_back ul li a img').show(100);
            sw=0;
        }
    });






















});
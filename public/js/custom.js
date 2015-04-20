/*
| ----------------------------------------------------------------------------------
| TABLE OF CONTENT
| ----------------------------------------------------------------------------------
	1. Setting
    2. Icon Hovered
	3. Waypoint Animated
	4. Price Range
	5. Camera Slider
	6. Scroll Top
	7. Carousels All
	8. Paralax   
	9. Slider Product
    10. Flickr
	11. Fancybox
	12.  Contact  Form
*/
$(document).ready(function() {


    "use strict";

    /////////////////////////////////////////////////////////////////
    // SETTING
    /////////////////////////////////////////////////////////////////

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();




    /////////////////////////////////////////////////////////////////
    // Btn icon hovered
    /////////////////////////////////////////////////////////////////

    $(".btn-icon").hover(
        function() {

            $(this).addClass('btn-hovered');
        },
        function() {
            $(this).removeClass('btn-hovered');
        }
    );


    /////////////////////////////////////////////////////////////////
    //  WAYPOINT ANIMATED
    /////////////////////////////////////////////////////////////////




    //////////////////////////////
    // Animated Entrances
    //////////////////////////////



    if (windowWidth > 1200) {


        $(window).scroll(function() {
            $('.animatedEntrance').each(function() {
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + 400) {
                    $(this).addClass("slideUp"); // slideUp, slideDown, slideLeft, slideRight, slideExpandUp, expandUp, fadeIn, expandOpen, bigEntrance, hatch
                }
            });
        });

    }


    if (windowWidth < 796) {


        /////////////////////////////////////
        //  Disable Mobile Animated
        /////////////////////////////////////


        $("body").addClass("inner-page");




    }




    if (windowWidth < 1200) {


        /////////////////////////////////////
        //  Disable Mobile Animated
        /////////////////////////////////////


        $("body").removeClass("noIE");




    }


    $('.noIE .animated:not(.animation-done)').waypoint(function() {



        var animation = $(this).data('animation');

        $(this).addClass('animation-done').addClass(animation);

    }, {
        triggerOnce: true,
        offset: '90%'
    });




    /////////////////////////////////////////////////////////////////
    //PRICE RANGE
    /////////////////////////////////////////////////////////////////


    if ($('#slider-start').length > 0) {


        $("#slider-start").noUiSlider({
            start: [20, 80],
            range: {
                'min': [0],
                'max': [100]
            }
        });

    }


    if ($('#slider-start2').length > 0) {



        $("#slider-start2").noUiSlider({
            start: [20, 80],
            range: {
                'min': [0],
                'max': [100]
            }
        });

    }


    /////////////////////////////////////////////////////////////////
    // CAMERA SLIDER
    /////////////////////////////////////////////////////////////////




    var slider = $(".camera_slider");


    slider.css("max-height", windowHeight - 100);




    if ($('.camera_slider').length > 0) {
        jQuery('.camera_slider').camera({
            fx: 'random',
            playPause: true,
            random: false,
            loader: 'bar',
            pagination: false,
            thumbnails: true,
            hover: false,
            opacityOnGrid: false,
            imagePath: '../media/'
        });




    }




    ////////////////////////////////////////////  
    //  Animate the scroll to top
    ///////////////////////////////////////////  




    $('.scroll-top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });



    ////////////////////////////////////////////  
    //  Carousels All
    ///////////////////////////////////////////  



    function carouselBx() {




        if (windowWidth > 800) {



            var brandslider = $('.brandslider ul li').length;

            if (brandslider > 6) {



                $('.brandslider ul').bxSlider({
                    slideWidth: 180,
                    minSlides: 5,
                    maxSlides: 6,
                    slideMargin: 20,
                    auto: true
                });

                $('.bx-next').html(' <i class="fa fa-angle-right"></i>')
                $('.bx-prev').html(' <i class="fa fa-angle-left"></i>')

            }




            /////////////////////////////////////
            //  CAROUSEL HOME PAGE
            /////////////////////////////////////

            var carReviewlength = $('.carousel-1 li').length;




            if (carReviewlength > 2) {



                $('.carousel-1').bxSlider({
                    slideWidth: 370,
                    minSlides: 3,
                    maxSlides: 3,
                    slideMargin: 10
                });

                $('.bx-next').html(' <i class="fa fa-angle-right"></i>')
                $('.bx-prev').html(' <i class="fa fa-angle-left"></i>')

            }



            /////////////////////////////////////
            //  CAROUSEL PRODUCT PAGE
            /////////////////////////////////////




            var car3length = $('.carousel-3 ul li').length;




            if (car3length > 6) {



                $('.carousel-3 ul').bxSlider({
                    slideWidth: 180,
                    minSlides: 5,
                    maxSlides: 6,
                    slideMargin: 20
                });

                $('.bx-next').html(' <i class="fa fa-angle-right"></i>')
                $('.bx-prev').html(' <i class="fa fa-angle-left"></i>')

            }



        } else {


            if (windowWidth > 600) {


                $('.brandslider ul').bxSlider({
                    slideWidth: 180,
                    minSlides: 4,
                    maxSlides: 4,
                    slideMargin: 20,
                    auto: true
                });

                $('.bx-next').html(' <i class="fa fa-angle-right"></i>')
                $('.bx-prev').html(' <i class="fa fa-angle-left"></i>')




                $('.carousel-1').bxSlider({
                    slideWidth: 370,
                    minSlides: 2,
                    maxSlides: 2,
                    slideMargin: 10
                });

                $('.bx-next').html(' <i class="fa fa-angle-right"></i>')
                $('.bx-prev').html(' <i class="fa fa-angle-left"></i>')



                /////////////////////////////////////
                //  CAROUSEL PRODUCT PAGE
                /////////////////////////////////////



                $('.carousel-3 ul').bxSlider({
                    slideWidth: 180,
                    minSlides: 3,
                    maxSlides: 3,
                    slideMargin: 20
                });

                $('.bx-next').html(' <i class="fa fa-angle-right"></i>')
                $('.bx-prev').html(' <i class="fa fa-angle-left"></i>')




            } else {
                $('.carousel-1').bxSlider();

                $('.bx-next').html(' <i class="fa fa-angle-right"></i>')
                $('.bx-prev').html(' <i class="fa fa-angle-left"></i>')


                /////////////////////////////////////
                //  CAROUSEL PRODUCT PAGE
                /////////////////////////////////////




                $('.carousel-3 ul').bxSlider();

                $('.bx-next').html(' <i class="fa fa-angle-right"></i>')
                $('.bx-prev').html(' <i class="fa fa-angle-left"></i>')




            }



            $('.brandslider ul').bxSlider({
                slideWidth: 180,
                minSlides: 4,
                maxSlides: 4,
                slideMargin: 20,
                auto: true
            });

            $('.bx-next').html(' <i class="fa fa-angle-right"></i>')
            $('.bx-prev').html(' <i class="fa fa-angle-left"></i>')




        }



    }



    carouselBx();


    $(window).resize(function() {
        carouselBx();
    });



    $('.carousel1').bxSlider({
        mode: 'vertical',
        auto: true,
        nextText: '',
        prevText: ''
    });

    $('.bx-next').html(' <i class="fa fa-angle-right"></i>')
    $('.bx-prev').html(' <i class="fa fa-angle-left"></i>')




    ////////////////////////////////////////////  
    // PARALAX
    ///////////////////////////////////////////  

    $(window).scroll(function(e) {
        parallax();
    });

    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.bg').css('top', -(scrolled * 0.2) + 'px');
        $('.bg2').css('top', -(scrolled * 0.2) + 'px');
        $('.bg3').css('top', -(scrolled * 0.2) + 'px');
        $('.bg4').css('top', -(scrolled * 0.2) + 'px');
    }



    ////////////////////////////////////////////  
    // SLIDER
    ///////////////////////////////////////////  


    // The slider being synced must be initialized first

    if ($('#slider-product').length > 0) {


        $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 170,
            itemMargin: 5,
            asNavFor: '#slider-product'
        });

        $('#slider-product').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#carousel"
        });


    }



    /////////////////////////////////////
    // SELECT BOX
    /////////////////////////////////////


    if ($('#find-car').length > 0) {

        $("#find-car select").selectbox();

    }

    if ($('.widget-filter').length > 0) {

        $(".widget-filter select").selectbox();

    }




    /////////////////////////////////////
    // Flickr Feed
    /////////////////////////////////////



    // Get your flickr ID from: http://idgettr.com/




    if ($('#flickr-feed').length > 0) {


        var flickr_id = '71865026@N00';

        var $flcr_feed

        $flcr_feed = $('#flickr-feed');
        if ($flcr_feed.length) {
            $('#flickr-feed').jflickrfeed({
                limit: $flcr_feed.data('items'),
                qstrings: {
                    id: '120066133@N02'
                },



                itemTemplate: '<li><a class="fancybox" href="{{image_b}}" rel="flickr"><img src="{{image_s}}" alt="{{title}}" /><span><i class="icomoon-search"></i></span></a></li>',
                itemCallback: function() {
                    $("a.fancybox[rel='flickr']").fancybox({
                        'transitionIn': 'elastic',
                        'transitionOut': 'elastic',
                        'speedIn': 600,
                        'speedOut': 200
                    });
                }
            });
        }


    }



    /////////////////////////////////////////////////////////////////
    // Fancybox
    /////////////////////////////////////////////////////////////////

    //if ($('body#gallery').is('*')) { // Uncomment to run script on specific page only
    if (jQuery.browser.mobile) {
        var myPhotoSwipe = $(".fancybox").photoSwipe({
            enableMouseWheel: false,
            enableKeyboard: false
        });
        var myPhotoProduct = $(".flexslider .slides > li a").photoSwipe({
            enableMouseWheel: false,
            enableKeyboard: false
        });
    } else {
        // Single Image
        //$("a.fancybox").fancybox();

        // Multiple Images
        $("a.fancybox[rel='gallery_group']").fancybox({
            'transitionIn': 'elastic',
            'transitionOut': 'elastic',
            'speedIn': 600,
            'speedOut': 200
        });



        $(".flexslider .slides > li a").fancybox({
            'transitionIn': 'elastic',
            'transitionOut': 'elastic',
            'speedIn': 600,
            'speedOut': 200
        });
    }




    /////////////////////////////////////
    //  Contact us form validation
    /////////////////////////////////////




    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        // we clear error messages
        $(this).find('.error').removeClass('error');
        $(this).find('.err_msg').fadeOut(200);

        // validate form
        var validation = validate_contact(e);

        for (var i = 0; i < validation.length; i++) {
            $(validation[i]).addClass('error');
        }

        if (validation.length) {
            $('body, html').animate({
                'scrollTop': $(validation[0]).offset().top - 100
            }, 'easeInCube', function() {
                $(this).select();
            });
            return false;
        } else {
            submit_form(e);
            return true;
        }
    });

    function validate_contact(e) {
        var $form = $(e.target);
        var rule, val, bad_fields = new Array();
        $form.find('input, textarea').each(function() {
            rule = $(this).data('validate');
            if (!rule) return;

            val = $(this).val();
            if (!val.match(rule)) {
                bad_fields.push(this);
            }
        });
        return bad_fields;
    }




    /////////////////////////////////////
    //  Contact us form submit
    /////////////////////////////////////




    function submit_form(e) {
        var $form = $(e.target),
            $btn = $form.find('button'),
            btn_text = $btn.text();
        $.ajax({
            url: 'inc/phpmailer/contact.php',
            data: $form.serialize(),
            dataType: 'json',
            type: 'POST',
            beforeSend: function() {
                $('#contact_fail .alert-inner').empty();
                $('#contact_fail').hide();
                $btn.attr('disabled', 'disabled').addClass('btn-disabled').css('cursor', 'not-allowed').text('Sending...');
            },
            success: function(result) {
                if (typeof result.success == 'undefined') {
                    // form is not valid, display errors
                    for (var x in result) {
                        $('#contact_fail .alert-inner').append('<p>' + result[x] + '</p>');
                    }
                    $('#contact_fail').fadeIn();
                } else {
                    // form sent successfully and without errors
                    $('#contact_success').fadeIn(700, function() {
                        var $this = $(this);
                        setTimeout(function() {
                            $this.fadeOut();
                        }, 5000);
                    });
                }
            },
            complete: function() {
                $btn.removeAttr('disabled', 'disabled').removeClass('btn-disabled').css('cursor', 'pointer').html(btn_text);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                switch (jqXHR.status) {
                    case 404:
                        alert("We're Sorry... The file you are looking for is not found :(");
                        break;
                    case 500, 200:
                        $('#contact_fail .alert-inner').append("<p>Oops, something went wrong and we couldn't send your message :(</p>");
                        $('#contact_fail').fadeIn();
                        break;
                    default:
                        console.log(jqXHR, textStatus, errorThrown);
                }
            }
        });
    }

    function get_max($el) {
        /* Get max height */
        var max = 0;
        $el.each(function() {
            var this_h = $(this).outerHeight();
            if (this_h > max) max = this_h;
        });
        return max;
    }




	 /////////////////////////////////////////////////////////////////
    // debugging subnav
    /////////////////////////////////////////////////////////////////
	
	
	$("#main-nav li a").click( function(){
	var dropdownHeight = $(this).next('.dropdown-menu').height();
    $("#main-nav .dropdown-menu").css('left',  dropdownHeight / 4)
	});
	
	

});
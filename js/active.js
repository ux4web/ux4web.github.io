// $('document').ready(function(){

//      //======>  Pricing Toggle Functionality

//     $("[class*='btn--toggle']").on('change',function(e){
        
        
//         var getTarget = $(this).attr('data-tab-target'); 
//         var inpSelect = $(this).children().children('input[type="checkbox"]');

//         if($(inpSelect).is(':checked')){
//             if($(getTarget).hasClass('monthly')){
//                 $(getTarget).removeClass('monthly');
//                 $(getTarget).addClass('yearly');
          
//             }
//         }else{
//             // $(getTarget).removeClass('monthly');
//             if($(getTarget).hasClass('yearly')){
//                 $(getTarget).removeClass('yearly');
//                 $(getTarget).addClass('monthly');
          
//             }
//         }      
//     })

  
// })


//======>  Mobile Menu Activation

$('.main-navigation').meanmenu({
    meanScreenWidth: "992",
    meanMenuContainer: '.mobile-menu',
    meanMenuClose: "<i class='icon icon-simple-remove'></i>",
    meanMenuOpen: "<i class='icon icon-menu-34'></i>",
    meanExpand: "",
});


// Scroll 

(function($) {
    "use strict";
    $(document).ready(function() {
        "use strict";
        //Scroll back to top
        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function() {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
    });
})(jQuery);

// Keep first accordion item open

$('#ux4web-faq-02').collapse({
    toggle: true
  })

// Play Music on Spinning Image Hover

var audio1 = document.getElementById("audioMusic");

function playMusic() {
  audio1.play();
}
function pauseMusic() {
  audio1.pause();
}


// Play Sound Effect on Button Hover

var audio2 = document.getElementById("audioSound");

function playSound() {
  audio2.play();
}
function pauseSound() {
  audio2.pause();
}
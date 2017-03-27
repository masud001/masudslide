//for themeforest defoult pattern
// (function($){
// 	$(document).ready(function(){
// 		






// 	});
// })(jQuery);


//all animation fuction here
//====================================
new WOW().init();


// latest news tickers
// =============================



// marquee js function
// =========================
  $(function(){
    $('.marquee').marquee({
  //If you wish to always animate using jQuery
  allowCss3Support: true,
  //works when allowCss3Support is set to true - for full list see http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function
  css3easing: 'linear',
  //requires jQuery easing plugin. Default is 'linear'
  easing: 'linear',
  //pause time before the next animation turn in milliseconds
  delayBeforeStart: 1000,
  //'left', 'right', 'up' or 'down'
  direction: 'left',
  //true or false - should the marquee be duplicated to show an effect of continues flow
  duplicated: false,
  //speed in milliseconds of the marquee in milliseconds
  duration: 20000,
  //gap in pixels between the tickers
  gap: 20,
  //on cycle pause the marquee
  pauseOnCycle: true,
  //on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
  pauseOnHover: true,
  //the marquee is visible initially positioned next to the border towards it will be moving
  startVisible: true


    });   
  });



//owl carousel js function
//=====================================
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	nav: true,
  	dots: true,
  	autoplay:true,
  	items:1,
    loop: false,
    margin: 10,
    navText:["<i class='fa fa-angle-left'></i> ", "<i class='fa fa-angle-right'></i>"],
    mouseDrag: false,
    touchDrag: false
  });
  
  
  $(".homepage-slider").on("translate.owl.carousel", function(){
    $(".slider-item-tablecell h1,.slider-item-tablecell p").removeClass("animated fadeInUp").css("opacity", "0");
    $(".slider-btn").removeClass("animated shake").css("opacity", "0");
  
  });
  
  $(".homepage-slider").on("translated.owl.carousel", function(){
    $(".slider-item-tablecell h1,.slider-item-tablecell p").addClass("animated fadeInUp").css("opacity", "1");
    $(".slider-btn").addClass("animated shake").css("opacity", "1");
  
  });
  
  
  
});

//owl carosel all js function here
//=============================================
/*

items: 3, //Type: Number //Default: 3 //The number of items you want to see on the screen.

margin: 10px, //Type: Number //Default: 0  //margin-right(px) on item.

loop: flase //Type: Boolean //Default: false //Infinity loop. Duplicate last and first items to get loop illusion.

center:false //Type: Boolean //Default: false //Center item. Works well with even an odd number of items.

mouseDrag: true //Type: Boolean //Default: true //Mouse drag enabled.

touchDrag:true //Type: Boolean //Default: true //Touch drag enabled.

pullDrag: true //Type: Boolean //Default: true //Stage pull to edge.

freeDrag: false //Type: Boolean //Default: false //Item pull to edge. 

stagePadding:0 //Type: Number //Default: 0 //Padding left and right on stage (can see neighbours).

merge:false //Type: Boolean //Default: false //Merge items. Looking for data-merge='{number}' inside item.

mergeFit:true //Type: Boolean //Default: true //Fit merged items if screen is smaller than items value.

autoWidth:true //Type: Boolean //Default: false //Set non grid content. Try using width style on divs.

startPosition:0 //Type: Number/String //Default: 0 //Start position or URL Hash string like '#id'.

URLhashListener:false //Type: Boolean //Default: false //Listen to url hash changes. data-hash on items is required.

nav:false //Type: Boolean // Default: false //Show next/prev buttons.

rewind:true //Type: Boolean // Default: true //Go backwards when the boundary has reached.

navText:["Next","Prev"] //Type: Array //Default: ["Next","Prev"] //HTML allowed.

navElement: div //Type: String  //Default: div //DOM element type for a single directional navigation link.

slideBy:1 //Type: Number/String // Default: 1 //Navigation slide by x. 'page' string can be set to slide by page.

dots:true //Type: Boolean //Default: true //Show dots navigation.

dotsEach:false //Type: Number/Boolean // Default: false //Show dots each x item.

dotData:false //Type: Boolean //Default: false //Used by data-dot content.

lazyLoad:false //Type: Boolean //Default: false // Lazy load images. data-src and data-src-retina for highres. 
//Also load images into background inline style if element is not <img>

lazyContent :false //Type: Boolean //Default: false //lazyContent was introduced during beta tests but i removed it
//from the final release due to bad implementation. It is a nice options so i will work on it in the nearest feature.

autoplay:false //Type: Boolean //Default: false //Autoplay.

autoplayTimeout:5000 //Type: Number // Default: 5000 //Autoplay interval timeout.

autoplayHoverPause:false //Type: Boolean //Default: false //Pause on mouse hover.

smartSpeed:250 //Type: Number // Default: 250 //Speed Calculate. More info to come..

fluidSpeed:1 //Type: Boolean //Default: Number //Speed Calculate. More info to come..

autoplaySpeed:false, //Type: Number/Boolean //Default: false //autoplay speed.

navSpeed:false, //Type: Number/Boolean //Default: false //Navigation speed.

dotsSpeed:0 //Type: Boolean // Default: Number/Boolean //Pagination speed.

dragEndSpeed:false, //Type: Number/Boolean // Default: false //Drag end speed.

callbacks:true //Type: Boolean // Default: true //Enable callback events.

responsive: //Type: Object //Default: empty object  //Object containing responsive options. 
            //Can be set to false to remove responsive capabilities.

responsiveRefreshRate:200 //Type: Number // Default: 200 //Responsive refresh rate.

responsiveBaseElement:window //Type: DOM element // Default: window //Set on any DOM element. 
//If you care about non responsive browser (like ie8) then use it on main wrapper. 
//This will prevent from crazy resizing.

video:false //Type: Boolean //Default: false //Enable fetching YouTube/Vimeo/Vzaar videos.

videoHeight:false, //Type: Number/Boolean // Default: false //Set height for videos.

videoWidth:false, //Type: Number/Boolean //Default: false //Set width for videos.

animateOut:false, //Type: String/Boolean // Default: false //Class for CSS3 animation out.

animateInClass:false //Type: String/Boolean //Default: false //Class for CSS3 animation in.

fallbackEasing:swing //Type: String // Default: swing  //Easing for CSS2 $.animate.

info:false, //Type: Function //Default: false //Callback to retrieve basic information (current item/pages/widths). 
    //Info function second parameter is Owl DOM object reference.

nestedItemSelector:false //Type: String/Class //Default: false //Use it if owl items are deep nested inside some 
//generated content. E.g 'youritem'. Dont use dot before class name.

itemElement:div, //Type: String // Default: div //DOM element type for owl-item.

stageElement:div, //Type: String // Default: div  //DOM element type for owl-stage.

navContainer:false, //Type: String/Class/ID/Boolean // Default: false //Set your own container for nav.

dotsContainer:false, //Type: String/Class/ID/Boolean //Default: false //Set your own container for nav.



*/













//sticky menu js
//===============================

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
        $('#sticky-anchor').height($('#sticky').outerHeight());
    } else {
        $('#sticky').removeClass('stick');
        $('#sticky-anchor').height(0);
    }
    
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});
//sticky menu js end
//===============================













































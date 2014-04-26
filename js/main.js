// FULL SCREEN STUFF -----------

function fully() {
    var h = $(window).height();
    var w = $(window).width();
    $('article').css("min-height", h);
    $('article').css("width", w);
    // menu
    $("header > #nav-container").css("height", (h*0.95));
    // intro
    $("#bni").css("height", h);
    $("#bni > div#logo_block").css("height", (h*0.95));
}

// ANIMATIONS -----------

function introAnimation() {
  // menu animation
  $( "nav.navbar" ).delay(1400).animate({ 
    "opacity": "+=1", 
  }, 
  400, "swing" );
  // logo animation
  $( "#bni > #logo_block > h3.text_intro" ).delay(0).animate({ 
    "opacity": "+=1", 
  }, 
  1000, "swing" );
  $( "#bni > #logo_block > .logo" ).delay(600).animate({ 
    "opacity": "+=1", 
  }, 
  1000, "swing" );
  $( "#bni > .download" ).delay(1400).animate({ 
    "opacity": "+=1", 
  }, 
  400, "swing" );

  // #typography animation
  $( "#typography > .container" ).delay(1800).animate({ 
    "opacity": "+=1", 
  }, 
  400, "swing" );
}

// SMOOTH SCROLLING -----------
function smoothScroll() {
  $('a[href=#bni], a[href=#typography], a[href=#guide], a[href=#build]:not([href=#], a[href=#carousel])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top + 1
        }, 300);
        return false;
      }
    }
  });
};

function charAnim() {
  var allChars = new Array();
  for(var i = 65; i <= 90; i++ ){ //CAPITALS
      var s = String.fromCharCode(i)+String.fromCharCode(i+32)
      allChars.push(s);
  }
  $("#char_swap1").mousemove(function(e){
      var width = $("#char_swap1").width();
      var division = width/26;
      var parentOffset = $(this).parent().offset(); 
      var relX = e.pageX - parentOffset.left;
      var pos = Math.round(relX/division)-1;
      if(pos>25){pos=25;}
      var c = allChars[pos];
      $("#char_swap1").find("h1").html(c);                       
  });
  $("#char_swap2").mousemove(function(e){
      var width = $("#char_swap2").width();
      var division = width/26;
      var parentOffset = $(this).parent().offset(); 
      var relX = e.pageX - parentOffset.left;
      var pos = Math.round(relX/division)-1;
      if(pos>25){pos=25;}
      var c = allChars[pos];
      $("#char_swap2").find("h1").html(c);                       
  });
};

// --------------------------------------------------------------------------------------------------------------

$(document).ready(function() {

  introAnimation();
  smoothScroll();
  charAnim();

  var yBniPos = "";
  var yTypographyPos = "";
  var yGuidePos = "";
  var yBuildPos = "";
  var yFooterPos = "";

  var yPosDiv = "";
  var yPosScroll = "";
  var bAnimated = false;

  $.fn.animateRotate = function(startAngle, endAngle, duration, easing, complete){
      return this.each(function(){
          var elem = $(this);

          $({deg: startAngle}).animate({deg: endAngle}, {
              duration: duration,
              easing: easing,
              step: function(now){
                  elem.css({
                    '-moz-transform':'rotate('+now+'deg)',
                    '-webkit-transform':'rotate('+now+'deg)',
                    '-o-transform':'rotate('+now+'deg)',
                    '-ms-transform':'rotate('+now+'deg)',
                    'transform':'rotate('+now+'deg)'
                  });
              },
              complete: complete || $.noop
          });
      });
  };
  
  var last = 0;
  $(".clapse").click(function(){
      var id = $(this).attr('id');
      if(last==""){ //we clicked the first one
          //console.log("first");
          $("#b"+id).animateRotate(0,90);
          last = id;
      }else if(id==last){ //clicked the same one
          //console.log("same");
          $("#b"+last).animateRotate(90,0);
          last = "";
      }else if(last!=""){ //clicked another one
          //console.log("another");
          $("#b"+last).animateRotate(90,0);
          $("#b"+id).animateRotate(0,90);
          last = id;
      }else{
          //console.log("uhoh");
      }
  });
  $("#b1").animateRotate(0,0);

  var last2 = 1;
  $(".cclapse").click(function(){
      var id = $(this).attr('id');
      if(last2==""){ //we clicked the first one
          console.log("first");
          $("#bb"+id).animateRotate(0,90);
          last2 = id;
      }else if(id==last2){ //clicked the same one
          console.log("same");
          $("#bb"+last2).animateRotate(90,0);
          last2 = "";
      }else if(last2!=""){ //clicked another one
          console.log("another");
          $("#bb"+last2).animateRotate(90,0);
          $("#bb"+id).animateRotate(0,90);
          last2 = id;
      }else{
          //console.log("uhoh");
      }
  });
  $("#bb1").animateRotate(0,90);

  $(window).resize(function(){
    // header.navbar
    var bniPos = $("#bni").position();
    var typographyPos = $("#typography").position();
    var guidePos = $("#guide").position();
    var buildPos = $("#build").position();
    var footerPos = $("footer").position();

    // changing the background color of the navbar
    yPosDiv         = footerPos.top;
    yBniPos         = bniPos.top;
    yTypographyPos  = typographyPos.top;
    yGuidePos       = guidePos.top;
    yBuildPos       = buildPos.top;
    yFooterPos      = footerPos.top;

  });

  $(window).trigger('resize');

  $(window).scroll(function() {
    
    yPosScroll = $(document).scrollTop();

    // animation
    if( (yPosScroll > (yPosDiv + 10)) && (bAnimated == false) ){
      bAnimated = true;
    }

    if(yPosScroll > yBniPos) {
      $("nav.navbar > #navcolor").attr("class", "");
      $("nav.navbar > #navcolor").addClass("bright_nav");
    }
    if(yPosScroll > yTypographyPos) {
      $("nav.navbar > #navcolor").attr("class", "");
      $("nav.navbar > #navcolor").addClass("dark_nav");
    }
    if(yPosScroll > yGuidePos) {
      $("nav.navbar > #navcolor").attr("class", "");
      $("nav.navbar > #navcolor").addClass("bright_nav");
    }
    if(yPosScroll > yBuildPos) {
      $("nav.navbar > #navcolor").attr("class", "");
      $("nav.navbar > #navcolor").addClass("dark_nav");
    }
    if(yPosScroll > yFooterPos) {
      $("nav.navbar > #navcolor").attr("class", "");
      $("nav.navbar > #navcolor").addClass("darkest_nav");
    }

  });
  
  

  // other ------------------------------------------------------------

});
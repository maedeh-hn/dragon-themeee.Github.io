
$('.navbar-xbootstrap').on('click', function() {
  $('.nav-xbootstrap').addClass('visible');
  $('.overlay').removeClass('hide');
});

$('.dismis-sm-menu , .overlay').on('click', function() {
  
  $('.nav-xbootstrap').removeClass('visible');
  $('.overlay').addClass('hide');
});

$('.search-open').on('click', function() {
  
  $('.overlay-search').removeClass('hide');
});

$('.search-close , .overlay-search').on('click', function() {
  
  $('.search-inline').removeClass('search-visible');
  $('.overlay-search').addClass('hide');
});


  
 // jQuery(document).ready(function(){
  //  $(".dropdown").hover(
  //      function() { $('.dropdown-menu', this).stop().fadeIn("fast");
   //     },
   //     function() { $('.dropdown-menu', this).stop().fadeOut("fast");
 //   });
//});





$(function() {
	$(".tab-btn").click(function() {
    $(".signup-inactive").toggleClass("signup-active");
    $(".signin-active").toggleClass("signin-inactive");
    
  });
});

$(document).ready(function(){
  var heroSlider = $('.owl-carousel-header');
  heroSlider.owlCarousel({
    rtl:true,
  autoplay:true,
  loop:true,
  margin:10,
  items:1,
  responsive:{
      0:{
          dots:false
      },
      576:{
        dots:false
    },
      768:{
        dots:false
      },
      992:{
        dots:true
      }
  }
  });

  heroSlider.on("changed.owl.carousel", function(event){
      // selecting the current active item
      var item = event.item.index-2;
      // first removing animation for all captions
      $('h3').removeClass('animate__animated animate__bounceInDown');
      $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animate__animated animate__bounceInDown');
  })

  // No animation in other captions so we need to add animation to owl-item while slide changed.


})


$('.owl-carousel-article').owlCarousel({
  rtl:true,
  autoplay:true,
  loop:true,
  dots:false,
  nav: true,
  navText:['<i class="fa fa-angle-left fa-2x fa-fw" aria-hidden="true "></i>','<i class="fa fa-angle-right fa-2x fa-fw" aria-hidden="true"></i>'],
  margin:10,
  responsive:{
      0:{
          items:1,
          nav: false
      },
      576:{
        items:2,
        nav: false
    },
      768:{
          items:3,
          
      },
      992:{
          items:4,
          
      }
  }
})

$('.owl-carousel-footer').owlCarousel({
  rtl:true,
  loop:true,
  autoplay:true,
 
 dots:false,
  items:1
})


$('.dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());
  $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
}); 
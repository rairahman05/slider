$(function(){
     $('.banner-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover:false,
    //   arrows:false,
     prevArrow:".one",
     nextArrow:".two",
     dots: true
    });
            
})
$(function(){
  $('.special-x').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
  //  autoplay: true,
   autoplaySpeed: 5000,
   pauseOnHover:false,
   arrows:true,
   centerMode: true,
   centerPadding: '0px',
 
 });
         
})
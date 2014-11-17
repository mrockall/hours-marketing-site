/**
 * Script used for the animation of elements through the home page.
 *
 * :: Animate In
 * This script will slide a bunch of elements into the page once it loads.
 *   
 */
!function () {

  var HeroAnimate = _ha ={

    init: function(){
      _ha.animateHeroIn();
    },

    animateHeroIn: function($elements){
      $('.js-animate-hero-in').velocity("transition.slideUpIn", { 
        display: 'block',
        duration: 600,
        stagger: 75,
        delay: 150,
        drag: true
      });

      $('.js-animate-devices-in').velocity("transition.slideUpIn", { 
        display: 'block',
        duration: 700,
        delay: 1000,
        stagger: 200,
        drag: true
      });
    }
  };


  $(document).ready(function(){
    HeroAnimate.init();
  });
}();
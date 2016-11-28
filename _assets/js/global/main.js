(function() {

  // $('.body-inner').fadeIn(2000);
  setTimeout(function(){
    $('#body-inner').fadeIn();
    // $('img').unveil({
        // offset: 100,
        // throttle: 200
        // placeholder: 'http://placehold.it/500x300'
    // });
  }, 250);

  // fonts
  (function(d) {
    var config = {
      kitId: 'cyg4jgv',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

  // menu toggle
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");

  var dropDown = $('.nav-link.more');

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });

  // visual grid: use 'g' key to toggle body class
  var k = new Kibo();
  k.down(['g'], function() {
    $('body').addClass('grid');
  }).up('g', function() {
    $('body').removeClass('grid');
  });

  // enquire: media queries, but for javascript
  // enquire.register("screen and (max-width: 48em)", {
  //   match : function() {
  //     console.log('up to 768px wide')
  //   },
  //   unmatch : function() {
  //   }
  // })
  // .register("screen and (min-width: 48.1em)", {
  //   match : function() {
  //     console.log('over 768px wide')
  //   },
  //   unmatch : function() {
  //   }
  // });

  // header navbar
  // var menuToggle = $('#js-navigation-mobile-menu').unbind();
  // $('#js-centered-navigation-menu').removeClass("show");

  // menuToggle.on('click', function(e) {
  //   e.preventDefault();
  //   $('#js-centered-navigation-menu').slideToggle(function(){
  //     if($('#js-centered-navigation-menu').is(':hidden')) {
  //       $('#js-centered-navigation-menu').removeAttr('style');
  //     }
  //   });
  // });

})();

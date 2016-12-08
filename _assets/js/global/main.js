
$(function() {
  // fade in content
  $('.body-inner').fadeIn(2000);
  setTimeout(function(){
    $('#body-inner').fadeIn();
  }, 250);
});

$(function() {
  // fonts
  (function(d) {
    var config = {
      kitId: 'cyg4jgv',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
});

$(function() {
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
});

// TODO: implement https://afarkas.github.io/lazysizes/ for pictureset
// $(function() {
//   $('img.lazy').unveil({
//     throttle: 200,
//     placeholder: 'https://placehold.it/451x567/e8287f'
//     // placeholder: '/assets/img/trans.gif'
//   });
// });


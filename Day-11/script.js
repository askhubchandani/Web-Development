 var content, breathing, doit;
    content = $('#doit-content');
    breathing = $('.seriously');
    doit = $('.doit');
    setTimeout(function(){
      breathing.addClass('breathe');
      doit.addClass('in');
    }, 750);
    setInterval(
      function() {
        if (breathing.hasClass("breathe")) {
          doit.removeClass('in');
          setTimeout(function(){
            breathing.removeClass('breathe');
          }, 750);
        } else {
          doit.addClass('in');
          setTimeout(function(){
            breathing.addClass('breathe');
          }, 750);
        }
      },
    5500);

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-69497180-2', 'auto');
    ga('send', 'pageview');

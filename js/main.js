
  //version 2.05
    $('button').click(function() {
        $(this).toggleClass('on off');
        $('body').toggleClass('light dark');
        $('.status').toggle();
    });

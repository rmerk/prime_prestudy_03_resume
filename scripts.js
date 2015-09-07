function toggleResume(){
$(document).ready(function(){
  $('button').on('click',function(){
      var show = 'Click to reveal resume!';
      var close = 'Click to close resume!';
      var button = $('button').text();

      if(button == show){
        $('.container').toggle('fast');
        $('button').text(close);
      }
      else if(button == close){
        $('.container').toggle('fast');
        $('button').text(show);
      }
  });//end onClick

  //When distance from top = 250px fade button in/out
        $(window).scroll(function(){
            if ($(this).scrollTop() > 250) {
                $('#scrollup').fadeIn(300);
            } else {
                $('#scrollup').fadeOut(300);
            }
        });

        //On click scroll to top of page t = 1000ms
        $('#scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });

});//end readyFunction
}//end toggleResume()

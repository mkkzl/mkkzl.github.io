$(function(){
console.log('in func');
    var pagePositon = 0,
        sectionsSeclector = 'section',
        $scrollItems = $(sectionsSeclector),
        offsetTolorence = 30,
        pageMaxPosition = $scrollItems.length - 1;

    //Map the sections:
    $scrollItems.each(function(index,ele) { $(ele).attr("debog",index).data("pos",index); });

    // Bind to scroll
    $(window).bind('scroll');
    console.log(pagePositon);
    //Move on click:
    $('#arrow a').click(function(e){
      console.log('click');
        if ($(this).hasClass('next') && pagePositon+1 <= pageMaxPosition) {
            pagePositon++;
            $('html, body').stop().animate({
                  scrollLeft: $scrollItems.eq(pagePositon).offset().left
            }, 300);
            pagePositon+=1;
        }
        if ($(this).hasClass('previous') && pagePositon-1 >= 0) {
            pagePositon--;
            $('html, body').stop().animate({
                  scrollLeft: $scrollItems.eq(pagePositon).offset().left
              }, 300);
            return false;
            pagePositon-=1;
        }
          console.log(pagePositon);
    });




});

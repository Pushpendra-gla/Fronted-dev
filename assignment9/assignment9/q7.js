// Q7 - Search Courses
$(function(){
  const $app = $('#app');
  const courses = ['JS Basics','Advanced CSS','React Intro','Node.js','Data Structures','Algorithms','Databases'];
  const $input = $('<input placeholder="Search courses" id="search" />');
  const $list = $('<div id="courses"></div>');
  courses.forEach(c=> $list.append(`<div class="item course">${c}</div>`));
  $app.append($input, $list, '<div id="count"></div>');
  // keyup filter, highlight match, toggle visibility, count
  $app.on('keyup','#search', function(){
    const q = $(this).val().toLowerCase();
    let count=0;
    $('.course').each(function(){
      const txt = $(this).text();
      if(q && txt.toLowerCase().includes(q)){
        $(this).show();
        // highlight matched text using css
        const regex = new RegExp('('+q+')','ig');
        $(this).html(txt.replace(regex,'<span class="match">$1</span>'));
        $(this).find('.match').css('background','#ff0');
        count++;
      } else if(q){
        $(this).hide();
      } else {
        $(this).show().text(txt);
      }
    });
    $('#count').text('Matched: '+count);
  });
  // clear button
  $app.append('<button class="btn" id="clear">Clear</button>');
  $app.on('click','#clear', function(){ $('#search').val(''); $('.course').show().each(function(){ $(this).text($(this).text()); }); $('#count').text(''); });
});

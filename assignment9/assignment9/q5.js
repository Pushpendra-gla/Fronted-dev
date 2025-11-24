// Q5 - Team Members Directory
$(function(){
  const $app = $('#app');
  const html = `<div>
    <div class="dept item" data-dept="Sales"><strong>Manager: Alice</strong>
      <div class="member" data-manager="Alice">Bob</div>
      <div class="member" data-manager="Alice">Charlie</div>
    </div>
    <div class="dept item" data-dept="Engineering"><strong>Manager: Dan</strong>
      <div class="member" data-manager="Dan">Eve</div>
      <div class="member" data-manager="Dan">Frank</div>
    </div>
  </div>`;
  $app.append(html);
  // click manager highlight direct reports
  $app.on('click','.dept strong', function(){
    const manager = $(this).text().replace('Manager: ','');
    $('.member').css('background','');
    $(`.member[data-manager="${manager}"]`).css('background','#fffbcc');
  });
  // hover employee show contact using next()
  $app.on('mouseenter','.member', function(){
    const $c = $('<div class="contact">Contact: '+$(this).text().toLowerCase()+'@company.com</div>');
    $(this).after($c);
  });
  $app.on('mouseleave','.member', function(){ $(this).next('.contact').remove(); });
  // click department change background of all members using children()
  $app.on('click','.dept', function(e){
    if(e.target.tagName.toLowerCase() === 'strong') return;
    $(this).children('.member').css('background','#e0f7ff');
  });
  // select random employee highlight siblings
  $app.append('<button class="btn" id="rand">Select Random Employee</button>');
  $app.on('click','#rand', function(){
    const $members = $('.member');
    const idx = Math.floor(Math.random()*$members.length);
    $members.css('background','');
    $members.eq(idx).siblings('.member').css('background','#ffdede');
  });
  // collapse/expand team using parent and find
  $app.append('<button class="btn" id="toggleTeams">Toggle Teams</button>');
  $app.on('click','#toggleTeams', function(){
    $('.dept').each(function(){ $(this).find('.member').toggle(); });
  });
});

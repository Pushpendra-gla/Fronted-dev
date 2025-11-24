// Q3 - Interactive FAQ
$(function(){
  const $app = $('#app');
  const faqs = [
    {q:'What is jQuery?', a:'A JavaScript library for DOM manipulation.'},
    {q:'How to include jQuery?', a:'Use a CDN link or local script.'},
    {q:'What is event delegation?', a:'Handling events on parent elements.'},
    {q:'Why use jQuery?', a:'Saves time with utilities and selectors.'},
    {q:'Is jQuery still relevant?', a:'For quick prototyping, yes.'}
  ];
  const $list = $('<div></div>');
  faqs.forEach((f,i)=>{
    const $q = $(`<div class="item" data-index="${i}"><h4 class="q">${f.q}</h4>
      <div class="a" style="display:none"><p>${f.a}</p><input placeholder="Add note" /></div></div>`);
    $list.append($q);
  });
  $app.append($list);
  // toggle answer visibility on click
  $app.on('click', '.q', function(){ $(this).siblings('.a').toggle(); });
  // hover change color
  $app.on('mouseenter', '.q', function(){ $(this).css('color','#007bff'); });
  $app.on('mouseleave', '.q', function(){ $(this).css('color',''); });
  // double-click collapse all
  $app.on('dblclick', '.q', function(){ $('.a').slideUp(); });
  // focus on input highlight parent question
  $app.on('focus', '.a input', function(){ $(this).closest('.item').css('background','#ffffe0'); });
  // blur reset
  $app.on('blur', '.a input', function(){ $(this).closest('.item').css('background',''); });
});

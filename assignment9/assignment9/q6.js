// Q6 - Event Subscription Panel
$(function(){
  const $app = $('#app');
  const $list = $('<div id="topics"></div>');
  ['News','Sports','Tech','Music','Finance'].forEach(t=>{
    const $t = $(`<div class="item topic">${t} <button class="btn sub">Subscribe</button> <button class="btn unsub">Unsubscribe</button></div>`);
    $list.append($t);
  });
  $app.append($list, '<button class="btn" id="addTopic">Add Topic</button>');
  // subscribe -> enable notifications (simple message)
  $app.on('click','.sub', function(){ $(this).closest('.topic').append('<div class="out">Subscribed</div>'); });
  // unsubscribe -> remove message
  $app.on('click','.unsub', function(){ $(this).closest('.topic').find('.out').remove(); });
  // dynamically add new topic and attach events via on()
  $app.on('click','#addTopic', function(){
    const name = 'Topic'+Math.floor(Math.random()*100);
    const $n = $(`<div class="item topic">${name} <button class="btn sub">Subscribe</button> <button class="btn unsub">Unsubscribe</button></div>`);
    $('#topics').append($n);
  });
  // remove specific subscription -> detach example: remove all sub handlers for first topic
  $app.append('<button class="btn" id="detach">Detach first topic subscribe</button>');
  $app.on('click','#detach', function(){
    $('#topics .topic').first().off('click','.sub');
    $('#topics .topic').first().append('<div class="out">Handlers detached</div>');
  });
  // show success message dynamically
  $app.on('click','.sub', function(){ $(this).closest('.topic').append('<div class="out">Success: notifications enabled</div>'); });
});

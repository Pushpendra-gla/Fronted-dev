// Q9 - Multi-jQuery Widgets using noConflict
// We will load two jQuery versions via CDN in this example HTML (handled externally in a real scenario).
// For demo, assume $ and jQuery are available. Use noConflict to allow multiple versions.
//
$(function(){
  const $app = $('#app');
  $app.append('<div class="item">Carousel area (v1 handles rotation)</div>');
  $app.append('<div class="item">Modal area (v2 handles modals)</div>');
  // demonstrate highlight active widget
  $app.on('click','.item', function(){ $('.item').css('border',''); $(this).css('border','2px solid #33a'); });
  // simulate tooltip on hover
  $app.on('mouseenter','.item', function(){ $(this).attr('title','Tooltip: more info'); });
});

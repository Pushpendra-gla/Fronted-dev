// Q4 - Special Offer Banner
$(function(){
  const $app = $('#app');
  const banners = ['Offer 1 - 10%','Offer 2 - 20%','Offer 3 - Buy1Get1','Offer 4 - Free Shipping','Offer 5 - Clearance'];
  const $wrap = $('<div></div>');
  banners.forEach((b,i)=> $wrap.append(`<div class="item" data-index="${i}">${b}</div>`));
  const $controls = $('<div></div>').append(
    '<button class="btn" id="hide">Hide</button>',
    '<button class="btn" id="show">Show</button>',
    '<button class="btn" id="slide">Slide Up/Down</button>',
    '<button class="btn" id="fade">Fade In/Out</button>');
  $app.append($controls, $wrap);
  // hide specific (first) banner
  $app.on('click','#hide',()=> $wrap.find('.item').first().hide());
  // show hidden
  $app.on('click','#show',()=> $wrap.find('.item').show());
  // slide toggle
  $app.on('click','#slide',()=> $wrap.find('.item').first().slideToggle());
  // fade toggle
  $app.on('click','#fade',()=> $wrap.find('.item').first().fadeToggle());
  // auto rotate every 5s
  let idx=0;
  setInterval(()=>{
    const $items = $wrap.find('.item');
    $items.fadeOut(400);
    $($items.get(idx)).fadeIn(400);
    idx = (idx+1) % $items.length;
  },5000);
});

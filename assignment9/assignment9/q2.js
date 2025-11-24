// Q2 - Product Highlight
// Demonstrates click, hover, data-attributes, and attribute selectors.
$(function(){
  const $app = $('#app');
  const products = [
    {id:1,name:'Shoes',price:120,stock:5,discount:true},
    {id:2,name:'T-Shirt',price:30,stock:0,discount:false},
    {id:3,name:'Watch',price:60,stock:3,discount:true},
    {id:4,name:'Backpack',price:45,stock:2,discount:false},
    {id:5,name:'Hat',price:20,stock:10,discount:false}
  ];
  const $list = $('<div></div>');
  products.forEach(p=>{
    // data attributes for stock and discount
    const $el = $(`<div class="item" data-id="${p.id}" data-stock="${p.stock}" data-discount="${p.discount}">
      <strong>${p.name}</strong> — $${p.price} <span class="details" style="display:none"> | In stock: ${p.stock}</span>
      <button class="btn fav" title="Favorite">☆</button>
    </div>`);
    $list.append($el);
  });
  $app.append($list);
  // click to highlight
  $app.on('click', '.item', function(e){
    $(this).toggleClass('highlight');
  });
  // hover to show details
  $app.on('mouseenter', '.item', function(){ $(this).find('.details').show(); });
  $app.on('mouseleave', '.item', function(){ $(this).find('.details').hide(); });
  // favorite toggle
  $app.on('click', '.fav', function(e){
    e.stopPropagation(); // prevent parent click
    $(this).toggleClass('selected');
    $(this).text($(this).hasClass('selected') ? '★' : '☆');
  });
  // attribute selector for discounts
  $('[data-discount="true"]').css('border-color','#f39c12');
  // alert if out of stock
  $app.on('click', '.item', function(){
    const stock = Number($(this).data('stock'));
    if(stock===0) alert('This product is out of stock!');
  });
});

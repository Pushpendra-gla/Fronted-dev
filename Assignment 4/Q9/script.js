
class Cart{
  constructor(){ this.items = []; }
  addItem(name,price,quantity){ this.items.push({name,price:+price,quantity:+quantity}); }
  getTotal(){ return this.items.reduce((s,i)=>s + i.price*i.quantity,0); }
  applyCoupon(code){
    const reg = /^(SAVE|DISC)(\d{2})$/;
    const m = code.match(reg);
    if(!m) return {ok:false,msg:'Invalid coupon format'};
    const discount = +m[2];
    const total = this.getTotal();
    const finalAmount = +(total - (total*discount/100)).toFixed(2);
    return {ok:true,discount,finalAmount};
  }
}
const cart = new Cart();
function renderCart(){
  document.getElementById('cartList').innerHTML = '<strong>Items:</strong><br>' + cart.items.map(i=>`${i.name} x${i.quantity} — ₹${i.price} each`).join('<br>');
  document.getElementById('q9out').innerText = 'Total: ₹' + cart.getTotal();
}
document.getElementById('addItem').addEventListener('click', ()=>{
  const name=document.getElementById('iname').value;
  const price=document.getElementById('iprice').value;
  const qty=document.getElementById('iqty').value;
  if(!name||!price||!qty){ alert('Fill all fields'); return; }
  cart.addItem(name,price,qty);
  renderCart();
});
document.getElementById('applyCoupon').addEventListener('click', ()=>{
  const c = document.getElementById('coupon').value.trim();
  const res = cart.applyCoupon(c);
  if(!res.ok) document.getElementById('q9out').innerText = 'Error: ' + res.msg;
  else document.getElementById('q9out').innerText = `Final after ${res.discount}% off: ₹${res.finalAmount}`;
});
renderCart();

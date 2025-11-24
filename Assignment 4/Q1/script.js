
class Product {
  constructor(id,name,price,category){
    this.id=id;this.name=name;this.price=price;this.category=category;
  }
  applyDiscount(percent){
    this.price = +(this.price - (this.price*percent/100)).toFixed(2);
  }
  getDetails(){
    return `ID: ${this.id} — ${this.name} — ₹${this.price} — ${this.category}`;
  }
}

const products = [
  new Product(1,'Phone',12000,'Electronics'),
  new Product(2,'Shoes',900,'Fashion'),
  new Product(3,'Laptop',55000,'Electronics'),
  new Product(4,'Watch',2500,'Accessories'),
];

function renderProducts(){
  const list = document.getElementById('productList');
  list.innerHTML = '<strong>All Products:</strong><br>' + products.map(p=>p.getDetails()).join('<br>');
  const expensive = products.filter(p=>p.price>1000);
  document.getElementById('q1out').innerHTML = '<strong>Products with price &gt; 1000:</strong><br>' + expensive.map(p=>p.getDetails()).join('<br>');
}

document.getElementById('applyBtn').addEventListener('click', ()=>{
  const id = +document.getElementById('pId').value;
  const pct = +document.getElementById('pPercent').value;
  const prod = products.find(p=>p.id===id);
  if(!prod){ alert('Product not found'); return; }
  prod.applyDiscount(pct);
  renderProducts();
});
renderProducts();

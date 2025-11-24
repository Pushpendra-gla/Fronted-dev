// Q6 Inventory
const products=[
{id:1,name:"A",category:"Mobile",price:10000,stock:5},
{id:2,name:"B",category:"Laptop",price:50000,stock:2},
{id:3,name:"C",category:"Mobile",price:15000,stock:1},
];
function getLowStockProducts(){return products.filter(p=>p.stock<3);}
function sortProductsByPrice(){return [...products].sort((a,b)=>a.price-b.price);}
function calculateTotalInventoryValue(){return products.reduce((a,p)=>a+p.price*p.stock,0);}
function groupByCategory(){
  return products.reduce((acc,p)=>{
    acc[p.category]=acc[p.category]||[];
    acc[p.category].push(p);
    return acc;
  },{});
}
console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());

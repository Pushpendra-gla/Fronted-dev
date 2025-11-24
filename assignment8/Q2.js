// Q2 Food Ordering
const menu={pizza:200,burger:120,pasta:150};
function calculateBill(items){
  try{
    const prices=items.map(i=>{
      if(!menu[i]) throw new Error("Invalid item: "+i);
      return menu[i];
    });
    return prices.reduce((a,b)=>a+b,0);
  }catch(e){
    console.error("Error:",e.message);
  }
}
console.log(calculateBill(["pizza","burger"]));
console.log(calculateBill(["pizza","abc"]));

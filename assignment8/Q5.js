// Q5 Ride Sharing
class User{constructor(name,rating){this.name=name;this.rating=rating;}}
class Driver extends User{
  constructor(name,rating,vehicle){super(name,rating);this.vehicle=vehicle;}
}
class Trip{
  constructor(from,to,dist){this.fromLocation=from;this.toLocation=to;this.distance=dist;}
  calculateFare(){
    if(!this.distance || this.distance<0) throw new Error("Invalid distance");
    return this.distance*12;
  }
}
try{
  const t=new Trip("A","B",10);
  console.log(t.calculateFare());
  const t2=new Trip("A","B",-5);
  console.log(t2.calculateFare());
}catch(e){console.error(e.message);}

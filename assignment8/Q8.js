// Q8 Movie Ticket
class MovieTicket{
  constructor(movie,seat,price){
    this.movieName=movie;this.seatNo=seat;this.price=price;
  }
}
MovieTicket.prototype.printTicket=function(){
  return `${this.movieName} - Seat ${this.seatNo} - Rs ${this.price}`;
};
class OnlineTicket extends MovieTicket{
  constructor(movie,seat,price,fee){
    super(movie,seat,price);this.convenienceFee=fee;
  }
  getTotalAmount(){return this.price+this.convenienceFee;}
}
const ot=new OnlineTicket("Avengers","A1",300,50);
console.log(ot.printTicket());
console.log(ot.getTotalAmount());

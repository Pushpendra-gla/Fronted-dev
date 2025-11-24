
function validateBooking(name,email,seats){
  const nameReg = /^[A-Za-z ]+$/;
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const seatReg = /^(?:[1-9]|10)$/;
  if(!nameReg.test(name)) return {ok:false,msg:'Invalid name'};
  if(!emailReg.test(email)) return {ok:false,msg:'Invalid email'};
  if(!seatReg.test(seats)) return {ok:false,msg:'Seats must be 1-10'};
  return {ok:true, ticket:{name,email,seats:+seats}};
}
document.getElementById('bookBtn').addEventListener('click', ()=>{
  const name=document.getElementById('mname').value;
  const email=document.getElementById('memail').value;
  const seats=document.getElementById('mseats').value;
  const res = validateBooking(name,email,seats);
  const out = document.getElementById('q5out');
  if(!res.ok) out.innerText = 'Error: '+res.msg;
  else out.innerText = 'Booking Confirmed:\n' + JSON.stringify(res.ticket,null,2);
});


let user = {name:'John', email:'john@mail.com', age:21};
function renderUser(){ document.getElementById('q8out').innerText = JSON.stringify(user, null, 2); }
document.getElementById('updateBtn').addEventListener('click', ()=>{
  user.name = document.getElementById('uname').value;
  user.email = document.getElementById('uemail').value;
  user.age = +document.getElementById('uage').value;
  renderUser();
});
renderUser();

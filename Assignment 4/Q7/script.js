
function validateLogin(username,password){
  const userReg = /^.{5,}$/;
  const passReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  const errors = [];
  if(!userReg.test(username)) errors.push('Username must be at least 5 characters');
  if(!passReg.test(password)) errors.push('Password must be 8+ chars and include uppercase, lowercase, number and special char');
  return errors;
}
document.getElementById('loginBtn').addEventListener('click', ()=>{
  const u=document.getElementById('luser').value;
  const p=document.getElementById('lpass').value;
  const errs = validateLogin(u,p);
  const out = document.getElementById('q7out');
  if(errs.length) out.innerHTML = 'Errors:<br>' + errs.map(e=>'- '+e).join('<br>');
  else out.innerHTML = 'Login Successful';
});

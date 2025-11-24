
function validateStudentForm(name,email,phone,password){
  const nameReg = /^[A-Za-z ]+$/;
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneReg = /^\d{10}$/;
  const passReg = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
  return {
    nameValid: nameReg.test(name),
    emailValid: emailReg.test(email),
    phoneValid: phoneReg.test(phone),
    passwordValid: passReg.test(password)
  };
}
document.getElementById('validate').addEventListener('click', ()=>{
  const name=document.getElementById('name').value;
  const email=document.getElementById('email').value;
  const phone=document.getElementById('phone').value;
  const password=document.getElementById('password').value;
  const res = validateStudentForm(name,email,phone,password);
  const out = document.getElementById('q2out');
  out.innerHTML = '';
  for(const k in res){
    const ok = res[k];
    out.innerHTML += `<div>${k}: <strong>${ok ? 'Valid' : 'Invalid'}</strong></div>`;
  }
});

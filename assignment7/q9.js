// Q9 - Form validation with preventDefault and live errors
const form = document.getElementById('q9-form');
const nameInput = document.getElementById('q9-name');
const emailInput = document.getElementById('q9-email');
const passInput = document.getElementById('q9-password');
const errName = document.getElementById('q9-err-name');
const errEmail = document.getElementById('q9-err-email');
const errPass = document.getElementById('q9-err-password');
const success = document.getElementById('q9-success');

function validate(){
  let ok=true;
  if(!nameInput.value.trim()){ errName.textContent='Required'; ok=false; } else errName.textContent='';
  if(!emailInput.value.includes('@')){ errEmail.textContent='Invalid email'; ok=false; } else errEmail.textContent='';
  if(passInput.value.length<6){ errPass.textContent='Min 6 chars'; ok=false; } else errPass.textContent='';
  return ok;
}

[nameInput,emailInput,passInput].forEach(inp=>{
  inp.addEventListener('input', ()=> { validate(); success.textContent=''; });
});

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(validate()){
    success.textContent = 'Form Submitted Successfully';
    form.reset();
  }
});

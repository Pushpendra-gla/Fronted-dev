// Q3 - Multi-step form with validation
const steps = Array.from(document.querySelectorAll('#q3-steps .step'));
let cur = 0;
const backBtn = document.getElementById('q3-back');
const nextBtn = document.getElementById('q3-next');
const summary = document.getElementById('q3-summary');

function showStep(i){
  steps.forEach(s=>s.style.display='none');
  steps[i].style.display='block';
  backBtn.disabled = i===0;
  nextBtn.textContent = i===steps.length-1 ? 'Finish' : 'Next';
}
function validStep(i){
  if(i===0) return document.getElementById('q3-name').value.trim()!=='';
  if(i===1) return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(document.getElementById('q3-email').value);
  if(i===2) return document.getElementById('q3-password').value.length>=6;
  return false;
}
backBtn.addEventListener('click', ()=>{
  if(cur>0){ cur--; showStep(cur); }
});
nextBtn.addEventListener('click', ()=>{
  if(!validStep(cur)){
    alert('Please fill current step correctly.');
    return;
  }
  if(cur<steps.length-1){ cur++; showStep(cur); return; }
  // finish
  const n=document.getElementById('q3-name').value;
  const e=document.getElementById('q3-email').value;
  const p=document.getElementById('q3-password').value;
  summary.textContent = `Summary:\nName: ${n}\nEmail: ${e}\nPassword: ${'*'.repeat(p.length)}`;
});
showStep(0);

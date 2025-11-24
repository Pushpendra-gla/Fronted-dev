// Q2 - Live Character Counter
const q2Text = document.getElementById('q2-text');
const q2Remaining = document.getElementById('q2-remaining');
const q2Reset = document.getElementById('q2-reset');
const MAX=100;
q2Text.addEventListener('keydown', (e)=>{
  const rem = MAX - q2Text.value.length;
  if(rem<=0 && e.key.length===1){
    e.preventDefault();
  }
});
q2Text.addEventListener('input', ()=>{
  const rem = MAX - q2Text.value.length;
  q2Remaining.textContent = rem;
  if(rem<=0){
    q2Remaining.style.color='red';
    q2Text.value = q2Text.value.slice(0,MAX);
  } else if(rem<=20){
    q2Remaining.style.color='orange';
  } else {
    q2Remaining.style.color='inherit';
  }
});
q2Reset.addEventListener('click', ()=>{
  q2Text.value='';
  q2Remaining.textContent=MAX;
  q2Remaining.style.color='inherit';
});

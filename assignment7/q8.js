// Q8 - Custom dropdown (no <select>), uses capturing phase for outside click close
const toggle = document.getElementById('q8-toggle');
const options = document.getElementById('q8-options');
toggle.addEventListener('click', (e)=>{
  options.hidden = !options.hidden;
});
options.addEventListener('click', (e)=>{
  if(e.target.tagName==='LI'){
    toggle.textContent = e.target.getAttribute('data-val');
    options.hidden = true;
  }
});
// clicking outside closes dropdown - use capture
document.addEventListener('click', (e)=>{
  if(!document.getElementById('q8-dropdown').contains(e.target)){
    options.hidden = true;
  }
}, true);

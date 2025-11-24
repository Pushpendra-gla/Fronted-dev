// Q7 - Mouse path & coords
const box = document.getElementById('q7-box');
const coords = document.getElementById('q7-coords');
box.addEventListener('mousemove', (e)=>{
  const r = box.getBoundingClientRect();
  const x = Math.round(e.clientX - r.left);
  const y = Math.round(e.clientY - r.top);
  coords.textContent = x+','+y;
});
box.addEventListener('dblclick', (e)=>{
  const r = box.getBoundingClientRect();
  const dot = document.createElement('div');
  dot.className='dot';
  dot.style.left = (e.clientX - r.left -4) + 'px';
  dot.style.top = (e.clientY - r.top -4) + 'px';
  box.appendChild(dot);
});

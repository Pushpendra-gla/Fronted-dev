// Q4 - Theme switcher using setAttribute and data-theme
const themeBtns = document.querySelectorAll('.theme-btn');
const q4Current = document.getElementById('q4-current');
themeBtns.forEach(b=>{
  b.addEventListener('click', ()=>{
    const t = b.getAttribute('data-theme');
    document.body.setAttribute('data-theme', t);
    q4Current.textContent = t;
  });
});
// apply simple styles based on attribute via JS (also could be CSS)
const observer = new MutationObserver(()=> {
  const t = document.body.getAttribute('data-theme') || 'light';
  if(t==='dark'){
    document.body.style.background = '#222';
    document.body.style.color = '#eee';
  } else if(t==='blue'){
    document.body.style.background = '#e6f0ff';
    document.body.style.color = '#033';
  } else {
    document.body.style.background = '#fff';
    document.body.style.color = '#111';
  }
});
observer.observe(document.body, {attributes:true});

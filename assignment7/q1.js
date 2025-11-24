// Q1 - Product List Manager with Event Delegation
const q1List = document.getElementById('q1-list');
const q1Input = document.getElementById('q1-input');
const q1Add = document.getElementById('q1-add');
const q1Log = document.getElementById('q1-log');

function renderItem(name){
  const li = document.createElement('li');
  li.innerHTML = `<span class="text">${name}</span>
    <button class="edit">Edit</button>
    <button class="del">Delete</button>`;
  return li;
}

q1Add.addEventListener('click', ()=>{
  const v = q1Input.value.trim();
  if(!v) return;
  q1List.appendChild(renderItem(v));
  q1Input.value='';
  q1Log.textContent = 'Added: '+v;
});

// Event delegation on ul
q1List.addEventListener('click', (e)=>{
  const target = e.target;
  const li = target.closest('li');
  if(target.classList.contains('del')){
    li.remove();
    q1Log.textContent='Deleted';
  }
  if(target.classList.contains('edit')){
    const span = li.querySelector('.text');
    const prev = span.textContent;
    const input = document.createElement('input');
    input.value = prev;
    span.replaceWith(input);
    input.focus();

    function save(){
      const newText = input.value.trim() || prev;
      const newSpan = document.createElement('span');
      newSpan.className='text';
      newSpan.textContent = newText;
      input.replaceWith(newSpan);
      q1Log.textContent = 'Saved: '+newText;
      document.removeEventListener('click', outside);
    }
    function outside(ev){
      if(!li.contains(ev.target)) save();
    }
    input.addEventListener('keydown', (ev)=>{
      if(ev.key==='Enter') save();
      if(ev.key==='Escape'){ input.value=prev; save(); }
    });
    // auto-save when clicking outside
    document.addEventListener('click', outside);
  }
});

// Q5 - Image gallery with modal. Using colored placeholders for images.
const gallery = document.getElementById('q5-gallery');
const modal = document.getElementById('q5-modal');
const modalContent = document.getElementById('q5-modal-content');

const colors = ['#ff9999','#99ff99','#9999ff','#ffd699','#d6b3ff','#99fff0'];
colors.forEach((c,i)=>{
  const div = document.createElement('div');
  div.className='thumb';
  div.style.background = c;
  div.textContent = 'Image '+(i+1);
  div.addEventListener('click', (e)=>{
    modal.style.display='flex';
    modalContent.style.background=c;
    modalContent.textContent = 'Large Image '+(i+1);
    e.stopPropagation();
  });
  gallery.appendChild(div);
});

modal.addEventListener('click', ()=> modal.style.display='none');
modalContent.addEventListener('click', (e)=> e.stopPropagation());

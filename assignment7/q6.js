// Q6 - Table filter
const students = [
  {name:'Alice', branch:'CSE', cgpa:8.5},
  {name:'Bob', branch:'ECE', cgpa:7.8},
  {name:'Charlie', branch:'ME', cgpa:6.9},
  {name:'Diana', branch:'CSE', cgpa:9.1},
];
const tbody = document.querySelector('#q6-table tbody');
const noresults = document.getElementById('q6-noresults');
function renderTable(list){
  tbody.innerHTML='';
  if(!list.length){ noresults.style.display='block'; return; }
  noresults.style.display='none';
  list.forEach(s=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${s.name}</td><td>${s.branch}</td><td>${s.cgpa}</td>`;
    tbody.appendChild(tr);
  });
}
renderTable(students);
document.getElementById('q6-search').addEventListener('input', (e)=>{
  const v = e.target.value.trim().toLowerCase();
  const filtered = students.filter(s=> s.name.toLowerCase().includes(v) || s.branch.toLowerCase().includes(v) || String(s.cgpa).includes(v));
  renderTable(filtered);
});

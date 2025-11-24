
class Book{
  constructor(title,author,ISBN,isIssued=false){
    this.title=title;this.author=author;this.ISBN=ISBN;this.isIssued=isIssued;
  }
  issueBook(){
    if(this.isIssued) return false;
    this.isIssued = true; return true;
  }
  returnBook(){ this.isIssued=false; }
}
const books = [
  new Book('Let Us C','Yash', '101'),
  new Book('Web Dev','Jonas','102'),
  new Book('AI Basics','Andrew','103', true)
];
function renderBooks(){
  document.getElementById('bookList').innerHTML = '<strong>All Books:</strong><br>' + books.map(b=>`${b.title} — ${b.author} — ISBN:${b.ISBN} — Issued:${b.isIssued}`).join('<br>');
  document.getElementById('q3out').innerHTML = '<strong>Available (not issued):</strong><br>' + books.filter(b=>!b.isIssued).map(b=>b.title+' (ISBN:'+b.ISBN+')').join('<br>');
}
document.getElementById('issueBtn').addEventListener('click', ()=>{
  const isbn = document.getElementById('isbn').value.trim();
  const b = books.find(x=>x.ISBN===isbn);
  if(!b){ alert('ISBN not found'); return;}
  const ok = b.issueBook();
  document.getElementById('q3out').innerText = ok ? 'Book issued: '+b.title : 'Book already issued';
  renderBooks();
});
renderBooks();

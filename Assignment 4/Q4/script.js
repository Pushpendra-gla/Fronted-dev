
class FormBuilder {
  constructor(fields){
    this.fields = fields;
  }
  render(containerId){
    let html = '<form id="dynamicForm">';
    this.fields.forEach(f=>{
      html += `<label>${f.label}</label><input type="${f.type}" id="field_${f.label.replace(/\s+/g,'_')}" placeholder="${f.label}">`;
    });
    html += `<button id="submitForm" type="button">Submit</button></form>`;
    document.getElementById(containerId).innerHTML = html;
    document.getElementById('submitForm').addEventListener('click', ()=>{
      const data = this.getFormData();
      document.getElementById('q4out').innerText = JSON.stringify(data, null, 2);
    });
  }
  getFormData(){
    const obj = {};
    this.fields.forEach(f=>{
      const id = 'field_'+f.label.replace(/\s+/g,'_');
      obj[f.label] = document.getElementById(id).value;
    });
    return obj;
  }
}

const fb = new FormBuilder([{type:'text',label:'Username'},{type:'email',label:'Email'},{type:'password',label:'Password'}]);
fb.render('formContainer');

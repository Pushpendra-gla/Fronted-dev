
class Employee {
  constructor(id,name,department,salary){
    this.id=id;this.name=name;this.department=department;this.salary=salary;
  }
  getAnnualSalary(){ return this.salary*12; }
  applyBonus(percent){ this.salary += this.salary*percent/100; }
}
const employees = [
  new Employee(1,'Shreya','CSE',30000),
  new Employee(2,'Riya','IT',28000),
  new Employee(3,'Amit','HR',25000),
  new Employee(4,'Karan','Finance',35000),
  new Employee(5,'Raj','Marketing',27000),
];
document.getElementById('empList').innerHTML = '<strong>Employees (monthly salary):</strong><br>' + employees.map(e=>`${e.name} — ₹${e.salary}`).join('<br>');
const totals = employees.map(e=>e.getAnnualSalary());
const totalPayout = totals.reduce((a,b)=>a+b,0);
document.getElementById('q6out').innerHTML = '<strong>Annual salaries:</strong><br>' + totals.map((t,i)=>employees[i].name+': ₹'+t).join('<br>') + '<br><br><strong>Total annual payout:</strong> ₹' + totalPayout;

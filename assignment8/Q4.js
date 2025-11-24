// Q4 Employee Inheritance
class Employee{
  constructor(name,dept){
    this.name=name;this.department=dept;
  }
  work(){return `${this.name} works in ${this.department}`;}
}
class Manager extends Employee{
  work(){return `${this.name} manages the ${this.department}`;}
}
const e=new Employee("A","Sales");
const m=new Manager("B","IT");
console.log(e.work());
console.log(m.work());

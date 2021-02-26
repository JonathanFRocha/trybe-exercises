// Variables for the exercise
const salary = 3000;

class netSalary {
  constructor(salary) {
    this._salary = salary;
    this._inss = this.getInss();
    this._ir = this.getIr();
    this._netSalary = this.getSalary();
  }
  getSalary() {
    return this._salary;
  }
  getInss() {
    const salary = this.getSalary();
    if (salary < 1556.95) {
      return salary * 0.08;
    } else if (salary >= 1556.95 && salary < 2594.93) {
      return salary * 0.09;
    } else if (salary >= 2594.93 && salary < 5189.82) {
      return salary * 0.11;
    } else {
      return 570.88;
    }
  }
  getIr() {
    const salary = this.getSalary();
    const inss = this.getInss();
    const baseSalary = salary - inss;
    if (baseSalary < 1903.99) {
      return 0;
    } else if (baseSalary >= 1903.99 && baseSalary < 2826.66) {
      return baseSalary * 0.075 - 142.8;
    } else if (baseSalary >= 2826.66 && baseSalary < 3751.05) {
      return baseSalary * 0.15 - 354.8;
    } else if (baseSalary >= 3751.05 && baseSalary < 4664.68) {
      return baseSalary * 0.225 - 636.13;
    } else {
      return baseSalary * 0.275 - 869.36;
    }
  }
  getNetSalary() {
    const salary = this.getSalary();
    const inss = this.getInss();
    const ir = this.getIr();
    return salary - inss - ir;
  }
}

const findMyNetSalary = new netSalary(salary);

console.log(findMyNetSalary.getNetSalary());

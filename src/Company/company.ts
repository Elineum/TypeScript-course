import { Accounting } from "../Departments/departments";
import { IDepartment } from "../Departments/interfaces/departments.interface";
import {
  IEmployee,
  ITrainee,
  IWorker,
} from "../Workers/interfaces/workers.interface";
import { Employee, Trainee } from "../Workers/workers";
import { ICompany } from "./interfaces/company.interface";

export class Company implements ICompany {
  private _name: string;
  private _departments: IDepartment[] = [];
  private _trainees: ITrainee[] = [];
  private _allWorkers: IWorker[] = [];

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  #findDepartment(departmentName: string): IDepartment | undefined {
    return this._departments.find(
      (dep) => dep.name.toLowerCase() === departmentName.toLowerCase()
    );
  }

  #updateWorkers(): void {
    const trainees: ITrainee[] = [];
    const employees: IEmployee[] = [];
    this._departments.forEach((department) => {
      department.ownEmpoyees.forEach((worker: Trainee | Employee) => {
        worker instanceof Trainee
          ? trainees.push(worker)
          : employees.push(worker);
      });
    });

    this._trainees = trainees;
    this._allWorkers = [...employees, ...trainees];
  }

  public addTraineeTo(departmentName: string, trainee: ITrainee): void {
    const department = this.#findDepartment(departmentName);

    if (department) {
      department.addWorker(trainee);
      console.log(
        `${trainee.name} sucessfully added to ${department.name} department as trainee!`
      );
    } else {
      console.log(`${departmentName} department not exist in this company.`);
    }

    this.#updateWorkers();
  }

  public hireEmployeeTo(departmentName: string, employee: IEmployee) {
    const department = this.#findDepartment(departmentName);

    if (department) {
      employee.inDepartment = department;
      department.addWorker(employee);
      console.log(
        `${employee.name} sucessfully added to ${department.name} department as trainee!`
      );
    } else {
      console.log(`${departmentName} department not exist in this company.`);
    }

    this.#updateWorkers();
  }

  public addDepartment(department: IDepartment): void {
    this._departments.push(department);

    console.log(
      `${department.name} added as department to ${this._name} company.`
    );
  }

  public removeDepartment(departmentName: string): void {
    this._departments = this._departments.filter(
      (dep) => dep.name !== departmentName
    );

    this.#updateWorkers();

    console.log(
      `${departmentName} was deleted as department of ${this._name} company.`
    );
  }

  public takeOnBalance(departmentName: string): void {
    const department: IDepartment | undefined =
      this.#findDepartment(departmentName);

    if (department) {
      const accounting: IDepartment | undefined =
        this.#findDepartment("Accounting");

      if (accounting instanceof Accounting) {
        accounting.getOnBalance(department);
        console.log(
          `${this._name} sucessfully added ${department.name} department on accounting balance.`
        );
      } else {
        console.log(
          `${this._name} dont have accounting department, cant add department on balance`
        );
      }
    } else {
      console.log(`${this._name} dont have this department.`);
    }
  }

  public dropFromBalance(departmentName: string): void {
    const department: IDepartment | undefined =
      this.#findDepartment(departmentName);

    if (department) {
      const accounting: IDepartment | undefined =
        this.#findDepartment("Accounting");

      if (accounting instanceof Accounting) {
        accounting.dropFromBalance(department);
        console.log(
          `${this._name} sucessfully dropped ${department.name} department from accounting balance.`
        );
      } else {
        console.log(
          `${this._name} dont have accounting department, cant drop department from balance`
        );
      }
    } else {
      console.log(`${this._name} dont have this department.`);
    }
  }

  public showTotalBalance(): void {
    const totalBalance: number = this._departments.reduce(
      (acc, department) => department.getBalance() + acc,
      0
    );

    console.log(
      `${this._name} has ${totalBalance}$ in total, as company budget.`
    );
  }

  public showExactDepartmentBalance(departmentName: string): void {
    const department = this.#findDepartment(departmentName);

    if (department) {
      console.log(`${department.name} has ${department.getBalance()}$.`);
    }
  }

  public fireWorker(workerFullName: string): void {
    this._departments.forEach((dep) => dep.removeWorker(workerFullName));

    this.#updateWorkers();

    console.log(
      `${workerFullName} was fired from ${this._name} company. Unlucky.`
    );
  }

  public promoteTrainee(traineeFullName: string): void {
    this._departments.forEach((dep) => {
      dep.traineeToEmployee(traineeFullName);
    });

    this.#updateWorkers();

    console.log(
      `${traineeFullName} was promoted to Employee. Nice work ${traineeFullName}!`
    );
  }

  public makeInvestment(money: number): void {
    const accounting: IDepartment | undefined =
      this.#findDepartment("Accounting");

    if (accounting instanceof Accounting) {
      accounting.getInvestment(money);

      console.log(
        `Your investment in ${this._name} company, ${money}$ has been successfully added. They were transferred to the ${accounting.name} department.`
      );
    } else {
      console.log(
        `Your investment has not been transferred. Because the ${this._name} does not have accounting department.`
      );
    }
  }

  public withdrawCompanyMoney(money: number): void {
    const accounting: IDepartment | undefined =
      this.#findDepartment("Accounting");

    if (accounting instanceof Accounting) {
      accounting.withdrawFromBalance(money);

      console.log(
        "You have successfully taken the company's money. I hope you need them more."
      );
    } else {
      console.log(
        `You cant take money, because ${this._name} company dont have accounting department now.`
      );
    }
  }

  public sendSalary(): void {
    const accounting: IDepartment | undefined =
      this.#findDepartment("Accounting");

    if (accounting instanceof Accounting) {
      accounting.paySalary(this._departments);
      console.log(
        `${this._name} paid salaries to all employees. Let's celebrate!`
      );
    } else {
      console.log(
        `Sorry, ${this._name} cant paid money, because dont have accounting department :(`
      );
    }
  }
}

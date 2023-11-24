import {
  EEmployeeStatus,
  ITrainee,
  IWorker,
} from "../Workers/interfaces/workers.interface";
import { Employee, Trainee } from "../Workers/workers";
import {
  IAccounting,
  IBudget,
  IDepartment,
} from "./interfaces/departments.interface";

export class Department implements IDepartment {
  protected _incomeSource: "accounting" | "self" = "self";
  protected _name: string = "";
  protected _direction: string = "";
  protected _ownEmployees: IWorker[] = [];
  protected _budget: IBudget = {
    debet: [],
    credit: [],
  };

  constructor(name: string, direction: string) {
    this._name = name;
    this._direction = direction;
  }

  get budget(): IBudget {
    return this._budget;
  }

  get incomeSource(): "accounting" | "self" {
    return this._incomeSource;
  }

  public setIncomeDependencies(dependence: "accounting" | "self") {
    this._incomeSource = dependence;
  }

  public getBalance(): number {
    const debetValue: number = this._budget.debet.reduce(
      (acc, transaction) => acc + transaction.change,
      0
    );

    const creditValue: number = this._budget.credit.reduce(
      (acc, transaction) => acc + transaction.change,
      0
    );

    return debetValue - creditValue;
  }

  get name(): string {
    return this._name;
  }

  get ownEmpoyees(): IWorker[] {
    return this._ownEmployees;
  }

  get direction(): string {
    return this._direction;
  }

  public addWorker(worker: Trainee | Employee): void {
    this._ownEmployees.push(worker);
  }

  public removeWorker(workerFullName: string): void {
    this._ownEmployees = this._ownEmployees.filter((worker) => {
      worker.fullName !== workerFullName;
    });
  }

  public traineeToEmployee(traineeFullName: string): void {
    const existTrainee: ITrainee | undefined = this._ownEmployees.find(
      (trainee) => trainee.fullName === traineeFullName
    );

    if (existTrainee) {
      this._ownEmployees = this._ownEmployees.filter(
        (trainee) => trainee.fullName !== traineeFullName
      );

      const employee = new Employee(
        existTrainee.name,
        existTrainee.surname,
        existTrainee.salary,
        existTrainee.bankBill,
        EEmployeeStatus.Active
      );

      employee.inDepartment = this;

      this._ownEmployees.push(employee);
    }
  }
}

export class Accounting extends Department implements IAccounting {
  private _balance: number = 0;
  public isAccounting: boolean = true;

  get balance(): number {
    return this._balance;
  }

  #updateBalance() {
    this._balance = this.getBalance();
  }

  public getInvestment(money: number): void {
    this._budget.debet.push({
      date: new Date().toLocaleDateString(),
      change: money,
    });

    this.#updateBalance();
  }

  public getOnBalance(department: IDepartment): void {
    department.setIncomeDependencies("accounting");
  }

  public dropFromBalance(department: IDepartment): void {
    department.setIncomeDependencies("self");
  }

  public withdrawFromBalance(money: number): void {
    this._budget.credit.push({
      date: new Date().toLocaleDateString(),
      change: money,
    });

    this.#updateBalance();
  }

  public paySalary(departamentsList: IDepartment[]): void {
    departamentsList.forEach((dep) => {
      const oldBalance = dep.getBalance();

      dep.ownEmpoyees.forEach((worker) => {
        if (worker instanceof Trainee) {
          this._budget.credit.push({
            date: new Date().toLocaleDateString(),
            change: worker.salary,
          });
        } else {
          dep.budget.credit.push({
            date: new Date().toLocaleDateString(),
            change: worker.salary,
          });
        }
      });

      if (dep.incomeSource === "accounting") {
        const difference = oldBalance - dep.getBalance();

        dep.budget.debet.push({
          date: new Date().toLocaleDateString(),
          change: difference,
        });
      }
    });

    this.#updateBalance();
  }
}

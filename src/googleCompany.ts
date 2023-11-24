import { Company } from "./Company/company";
import { ICompany } from "./Company/interfaces/company.interface";
import { Accounting, Department } from "./Departments/departments";
import { EEmployeeStatus } from "./Workers/interfaces/workers.interface";
import { Employee, Trainee } from "./Workers/workers";

const googleCompany: ICompany = new Company("Google");

googleCompany.addDepartment(new Department("IT", "Development"));
googleCompany.addDepartment(new Department("Care", "Health"));
googleCompany.addDepartment(new Department("Drive", "Taxi"));
googleCompany.addDepartment(new Accounting("Accounting", "Finance"));

googleCompany.takeOnBalance("IT");
googleCompany.takeOnBalance("Care");
googleCompany.takeOnBalance("Drive");

googleCompany.addTraineeTo(
  "IT",
  new Trainee("Alex", "Seho", 300, 1004023671769134n)
);
googleCompany.addTraineeTo(
  "Care",
  new Trainee("Julia", "Koryavka", 500, 6744474183707034n)
);
googleCompany.addTraineeTo(
  "Accounting",
  new Trainee("Eugen", "Kuka", 550, 3323484995092724n)
);
googleCompany.addTraineeTo(
  "Drive",
  new Trainee("Grisha", "Vosk", 600, 7493296612175580n)
);
googleCompany.hireEmployeeTo(
  "IT",
  new Employee(
    "Varden",
    "Cooper",
    1500,
    1267417945213258n,
    EEmployeeStatus.Active
  )
);
googleCompany.hireEmployeeTo(
  "IT",
  new Employee("Xavi", "Cook", 2000, 7401415931195248n, EEmployeeStatus.Active)
);

googleCompany.showTotalBalance();
googleCompany.makeInvestment(100000);
googleCompany.showTotalBalance();

googleCompany.sendSalary();
googleCompany.showTotalBalance();

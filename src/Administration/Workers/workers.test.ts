import { Worker } from "./worker";
import { WorkerDatabase } from "./workers";
import { IWorkerDatabase } from "./workers.interface";

describe("Workers", () => {
  let workerDatabase: IWorkerDatabase;
  const joshWorker = new Worker("Josh", "Mock", "Cleaner", 500);
  const annyWorker = new Worker("Anny", "Mock", "Tamer", 800);

  beforeEach(() => {
    workerDatabase = new WorkerDatabase();
  });

  it("should create instance of WorkerDatabase", () => {
    expect(workerDatabase).toBeInstanceOf(WorkerDatabase);
  });

  it("should calculate salary expenses correct, after hire worker", () => {
    workerDatabase.addWorker(joshWorker);
    const afterFisrtHire: number = workerDatabase.getSalaryExpenses();

    expect(afterFisrtHire).toBe(500);

    workerDatabase.addWorker(annyWorker);
    const afterSecondHire: number = workerDatabase.getSalaryExpenses();

    expect(afterSecondHire).toBe(1300);
  });

  it("should calculate salary expenses correct, after fire worker", () => {
    workerDatabase.addWorker(joshWorker);
    workerDatabase.addWorker(annyWorker);
    const afterWorkersHired: number = workerDatabase.getSalaryExpenses();

    expect(afterWorkersHired).toBe(1300);

    workerDatabase.fireWorker("Josh Mock");
    const afterFireWorker: number = workerDatabase.getSalaryExpenses();

    expect(afterFireWorker).toBe(800);
  });
});

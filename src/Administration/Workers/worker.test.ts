import { Worker } from "./worker";
import { iWorker } from "./workers.interface";

describe("Worker", () => {
  let annyWorker: iWorker;

  beforeAll(() => {
    annyWorker = new Worker("Anny", "Mock", "Tamer", 800);
  });

  it("should create instance of Worker", () => {
    expect(annyWorker).toBeInstanceOf(Worker);
  });

  it("should return fullname of worker", () => {
    const fullname: string = annyWorker.getFullname();

    expect(fullname).toBe("Anny Mock");
  });

  it("should get salary number correct, after change too", () => {
    expect(annyWorker.salary).toBe(800);

    annyWorker.changeSalary(1500);

    expect(annyWorker.salary).toBe(1500);
  });
});

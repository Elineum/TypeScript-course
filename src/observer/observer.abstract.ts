import { IObservable, IObserver, ITask } from "./observer.interfaces";

export abstract class Observable implements IObservable {
  #observers: IObserver[] = [];

  attach(observer: IObserver): void {
    if (this.#observers.includes(observer)) {
      return;
    }
    this.#observers.push(observer);
  }

  detach(observer: IObserver): void {
    const observerIndex = this.#observers.indexOf(observer);
    if (observerIndex === -1) {
      return;
    }
    this.#observers.splice(observerIndex, 1);
  }

  notify(task: ITask): void {
    console.log(`New task has been added to the board!`);

    this.#observers.forEach(
      (observer) => observer.id === task.assigneeId && observer.update(task)
    );
  }
}

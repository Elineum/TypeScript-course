import { INotification } from "./notifiers/notifiers.interface";
import { SmsNotification } from "./notifiers/smsNotification";
import { Observable } from "./observer/observer.abstract";
import { IObserver, ITask } from "./observer/observer.interfaces";

class Task implements ITask {
  constructor(
    public title: string,
    public description: string,
    public assigneeId: string
  ) {}
}

class TaskBoard extends Observable {
  #tasks: Task[] = [];
  #strategy: INotification = new SmsNotification();

  get tasks() {
    return this.#tasks;
  }

  addTask(task: Task): void {
    this.#tasks.push(task);
    this.notify(task);
    this.#strategy.notify(task);
  }

  set strategy(newStategy: INotification) {
    this.#strategy = newStategy;
  }
}

class User implements IObserver {
  #activeTask?: Task;
  name: string;
  readonly id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = "id" + Math.random().toString(16).slice(2);
  }

  get activeTask(): Task | undefined {
    return this.#activeTask;
  }

  update(task: ITask): void {
    console.log(
      `${this.name} you received a new task, check your personal account or board.`
    );

    this.#activeTask = task;
  }
}

import { ITask } from "../observer/observer.interfaces";
import { INotification } from "./notifiers.interface";

export class EmailNotification implements INotification {
  #type: string = "email";

  notify(task: ITask): void {
    console.log(
      `(${this.#type.toUpperCase()}): added new task. Title: ${task.title}`
    );
  }
}

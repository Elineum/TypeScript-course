import { ITask } from "../observer/observer.interfaces";
import { INotification } from "./notifiers.interface";

export class TelegramNotification implements INotification {
  #type: string = "telegram";

  notify(task: ITask): void {
    console.log(
      `(${this.#type.toUpperCase()}): added new task. Title: ${task.title}`
    );
  }
}

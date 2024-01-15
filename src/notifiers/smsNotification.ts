import { ITask } from "../observer/observer.interfaces";
import { INotification } from "./notifiers.interface";

export class SmsNotification implements INotification {
  #type: string = "sms";

  notify(task: ITask): void {
    console.log(
      `(${this.#type.toUpperCase()}): added new task. Title: ${task.title}`
    );
  }
}

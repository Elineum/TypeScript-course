import { ITask } from "../observer/observer.interfaces";

export interface INotification {
  notify(task: ITask): void;
}

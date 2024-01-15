export interface ITask {
  title: string;
  description: string;
  assigneeId: string;
}

export interface IObserver {
  name: string;
  id: string;
  update(task: ITask): void;
}

export interface IObservable {
  attach(observer: IObserver): void;

  detach(observer: IObserver): void;

  notify(task: ITask): void;
}

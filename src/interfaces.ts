import { ENoteStatus } from "./noteStatus.enum";

export interface INote {
  name: string;
  description: string;
  changeDate: string;
  status: ENoteStatus;
  id: string;

  finishNote(): void;
  updateDate(): void;
}

export interface INoteSecured extends INote {
  secured: true;
}

export interface INoteList {
  noteList: INote[];

  addNote(name: string, description: string, secured?: "secured"): void;
  deleteNote(id: string): void;
  editNote(id: string): INote | void;
  showNoteInfo(id: string): void;
  getNotesList(): INote[];
  finishNote(id: string): void;
  getListInfo(): void;
  getNote(id: string): INote | undefined;
}

export interface INoteListWithSearch extends INoteList {
  findByNameOrDesk(name?: string, description?: string): INote | void;
}

export interface INoteListWithSort extends INoteList {
  sortByStatus(name?: string, description?: string): void;
}

// Вам необхідно написати додаток Todo list. У списку нотаток повинні бути методи для додавання нового запису, видалення, редагування та отримання повної інформації про нотатку за ідентифікатором, а так само отримання списку всіх нотаток. Крім цього, у користувача має бути можливість позначити нотатку, як виконану, і отримання інформації про те, скільки всього нотаток у списку і скільки залишилося невиконаними. Нотатки не повинні бути порожніми.
// Кожний нотаток має назву, зміст, дату створення ( або редагування) та статус. Нотатки бувають двох типів. Дефолтні та такі, які вимагають підтвердження при редагуванні.
// Окремо необхідно розширити поведінку списку та додати можливість пошуку нотатка за ім'ям або змістом.
// Також окремо необхідно розширити список можливістю сортування нотаток за статусом або часом створення.

import { v4 as uuidv4 } from "uuid";
import { ENoteStatus } from "./noteStatus.enum";
import {
  INote,
  INoteList,
  INoteListWithSearch,
  INoteListWithSort,
  INoteSecured,
} from "./interfaces";

export class TodoList implements INoteList {
  noteList: INote[] = [];

  constructor() {}

  addNote(name: string, description: string, secured?: "secured"): void {
    secured
      ? this.noteList.push(new SecuredNote(name, description))
      : this.noteList.push(new Note(name, description));
  }

  deleteNote(id: string): void {
    this.noteList = this.noteList.filter((note) => id !== note.id);
  }

  editNote(id: string): INote | void {
    const noteForEdit = this.getNote(id);

    if (!noteForEdit) {
      console.log("Cant find any notes with this ID");
      return;
    }

    if (noteForEdit instanceof SecuredNote) {
      console.log("Its secured note, you need confirm changes in next actions");
      return noteForEdit;
    }

    return noteForEdit;
  }

  showNoteInfo(id: string): void {
    const note = this.getNote(id);

    if (!note) return;

    const { name, description, changeDate, status } = note;

    console.log(`
    Choosed note full info:
    Name: ${name},
    Description: ${description},
    Last changes: ${changeDate},
    Status: ${status},
    `);
  }

  getNotesList(): INote[] {
    return this.noteList;
  }

  finishNote(id: string): void {
    const note = this.getNote(id);

    if (!note) return;

    note.finishNote();
  }

  getListInfo(): void {
    const activeNotes = this.getNotesList().filter(
      (note: any) => note.status === ENoteStatus.Active
    );

    console.log(`
    You have ${this.getNotesList().length} notes in your list.
    ${activeNotes.length} of which still active!
    `);
  }

  getNote(id: string): INote | undefined {
    return this.noteList.find((note) => id === note.id);
  }
}

class TodoListWithSearch extends TodoList implements INoteListWithSearch {
  findByNameOrDesk(name?: string, description?: string): INote | void {
    if (name?.trim() && description?.trim()) {
      return this.noteList.find(
        (note) =>
          note.name.includes(name) && note.description.includes(description)
      );
    } else if (name?.trim()) {
      return this.noteList.find((note) => note.name.includes(name));
    } else if (description?.trim()) {
      return this.noteList.find((note) =>
        note.description.includes(description)
      );
    }
  }
}

class TodoListWithSort extends TodoList implements INoteListWithSort {
  sortByStatus(): void {
    this.noteList.sort((a, b) => a.status.localeCompare(b.status));
  }
}

class Note implements INote {
  #name: string = "New Note!";
  #description: string = "Empty Description";
  #id: string = uuidv4();
  #changeDate: string = new Date().toDateString();
  #status: ENoteStatus = ENoteStatus.Active;

  constructor(name: string, description: string) {
    this.#name = name;
    this.#description = description;
  }

  set name(newName: string) {
    this.#name = newName;
  }

  get name() {
    return this.#name;
  }

  set description(newDescription: string) {
    this.#description = newDescription;
  }

  get description() {
    return this.#description;
  }

  get changeDate() {
    return this.#changeDate;
  }

  get status() {
    return this.#status;
  }

  get id() {
    return this.#id;
  }

  finishNote(): void {
    this.#status = ENoteStatus.Finished;
    this.updateDate();
  }

  updateDate(): void {
    this.#changeDate = new Date().toDateString();
  }
}

class SecuredNote extends Note implements INoteSecured {
  #secured: true = true;

  get secured() {
    return this.#secured;
  }
}

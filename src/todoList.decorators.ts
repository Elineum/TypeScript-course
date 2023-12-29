import { TodoList } from ".";
import {
  INoteList,
  INoteListWithSearch,
  INoteListWithSort,
} from "./interfaces";

type TConstructor<T = {}> = new (...args: any[]) => T;

export function FindByNameOrDesk<T extends TConstructor>(
  originalClass: T & INoteList,
  context: ClassDecoratorContext<T>
) {
  if (context.kind !== "class") throw new Error("Class only decorator");

  return class extends originalClass {
    findByNameOrDesk(name?: string, description?: string) {
      if (name?.trim() && description?.trim()) {
        return this.getNotesList().find(
          (note: any) =>
            note.name.includes(name) && note.description.includes(description)
        );
      } else if (name) {
        return this.getNotesList().find((note: any) =>
          note.name.includes(name)
        );
      } else if (description) {
        return this.getNotesList().find((note: any) =>
          note.description.includes(description)
        );
      } else {
        console.log(
          "У вас нет заметок с указанным именем или описанием, или ваше поле пусто"
        );
      }
    }
  };
}

export function SortByNameOrDesk<T extends TConstructor>(
  originalClass: T,
  context: ClassDecoratorContext<T>
) {
  if (context.kind !== "class") throw new Error("Class only decorator");

  return class extends originalClass {
    sortByNameOrDesk(name?: string, description?: string): void {
      this.noteList.sort((a, b) => 1);
    }
  };
}

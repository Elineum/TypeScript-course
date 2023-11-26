import { IEntity } from "./interfaces/entity.interface";

function convertToString(value: any): string | undefined {
  if (value) {
    if (typeof value.toString === "function") return value.toString();
  }

  return undefined;
}

function sortEntities(array: IEntity[], order: "asc" | "desc"): IEntity[] {
  const sortedArray: IEntity[] = array.sort((a, b) => a.id - b.id);

  return order === "asc" ? sortedArray : sortedArray.reverse();
}

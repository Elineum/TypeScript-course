import { IEntity } from "./interfaces/entity.interface";

function convertToString<T>(value: T): string | undefined {
  if (value) {
    if (typeof value.toString === "function") return value.toString();
  }

  return undefined;
}

function sortEntities<T extends IEntity>(
  array: T[],
  order: "asc" | "desc"
): T[] {
  const sortedArray: T[] = [...array].sort((a, b) => a.id - b.id);

  return order === "asc" ? sortedArray : sortedArray.reverse();
}

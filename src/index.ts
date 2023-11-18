// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання.
// Наприклад, тип значення для кожного ключа може бути число | рядок.
interface ITaskOne {
  [key: string]: string | number;
}

// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями.
// Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
interface ITaskTwo {
  [key: string]: (...args: unknown[]) => void;
}

// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта,
// подібного до масиву. Ключі повинні бути числами, а значення - певного типу.
interface ITaskThree<T> {
  [key: number]: T;
}

// Створіть інтерфейс з певними властивостями та індексною сигнатурою. Наприклад,
// ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
interface ITaskFour {
  name: string;
  age: number;
  [key: string]: unknown;
}

// Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
interface ITaskFiveDotOne {
  [key: string]: unknown;
}

interface ITaskFiveDotTwo extends ITaskFiveDotOne {
  name: string;
  age: number;
}

// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє,
// чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).
function taskSix(someObj: { [key: string]: number }): boolean {
  for (const key in someObj) {
    if (typeof someObj[key] !== "number") return false;
  }

  return true;
}

import {
  IShape,
  ICircle,
  IRectangle,
  ISquare,
  ITriangle,
} from "./@interfaces/interfaces.ts";

abstract class Shape implements IShape {
  constructor(public readonly name: string, public readonly color: string) {}

  public abstract calculateArea(): number;
}

class Circle extends Shape implements ICircle {
  public calculateArea(): number {
    return Math.random() + 1;
  }
}

class Rectangle extends Shape implements IRectangle {
  public calculateArea(): number {
    return Math.random() + 10;
  }

  public print() {
    return "S = L * H";
  }
}

class Square extends Shape implements ISquare {
  public calculateArea(): number {
    return Math.random() + 100;
  }

  public print() {
    return "S = s * s";
  }
}

class Triangle extends Shape implements ITriangle {
  public calculateArea(): number {
    return Math.random() + 1000;
  }
}

import {
  IShape,
  ICircle,
  IRectangle,
  ISquare,
  ITriangle,
  IFormula,
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

class Rectangle extends Shape implements IRectangle, IFormula {
  public calculateArea(): number {
    return Math.random() + 10;
  }

  public print(): string {
    return "S = L * H";
  }
}

class Square extends Shape implements ISquare, IFormula {
  public calculateArea(): number {
    return Math.random() + 100;
  }

  public print(): string {
    return "S = s * s";
  }
}

class Triangle extends Shape implements ITriangle {
  public calculateArea(): number {
    return Math.random() + 1000;
  }
}

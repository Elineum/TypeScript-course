export interface IShape {
  name: string;
  color: string;
  calculateArea(): number;
}

export interface IFormula {
  print(): string;
}

export interface IRectangle extends IShape {}

export interface ISquare extends IShape {}

export interface ICircle extends IShape {}

export interface ITriangle extends IShape {}

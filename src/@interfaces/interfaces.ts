export interface IShape {
  name: string;
  color: string;
  calculateArea(): number;
}

export interface IRectangle extends IShape {
  print(): string;
}

export interface ISquare extends IShape {
  print(): string;
}

export interface ICircle extends IShape {}

export interface ITriangle extends IShape {}

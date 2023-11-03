import { Lecturer } from "./@types/Lecturer";

class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  private _areas: Area[] = [];
  private _lecturers: Lecturer[] = []; // Name, surname, position, company, experience, courses, contacts

  get areas(): Area[] {
    return this._areas;
  }

  get lecturers(): Lecturer[] {
    return this._lecturers;
  }

  addArea(area: Area): void {
    this._areas.push(area);
  }

  removeArea(area: Area): void {
    this._areas = this._areas.filter((currArea) => currArea.name !== area.name);
  }

  addLecturer(lecturer: Lecturer): void {
    this._lecturers.push(lecturer);
  }

  removeLecturer(lecturerName: string): void {
    const [name, surname] = lecturerName.split(" ");
    this._lecturers = this._lecturers.filter(
      (currLecturer) =>
        currLecturer.name !== name && currLecturer.surname !== surname
    );
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  private _levels: Level[] = [];
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get levels(): Level[] {
    return this._levels;
  }

  get name(): string {
    return this._name;
  }

  addLevel(level: Level): void {
    this._levels.push(level);
  }

  removeLevel(level: Level): void {
    this._levels = this._levels.filter(
      (currLevel) => currLevel.name !== level.name
    );
  }
}

class Level {
  // implement getters for fields and 'add/remove group' methods

  private _groups: Group[] = [];
  private _name: string;
  private _description: string;

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  get group(): Group[] {
    return this._groups;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  addGroup(group: Group): void {
    this._groups.push(group);
  }

  removeGroup(group: Group): void {
    this._groups = this._groups.filter(
      (currGroup) => currGroup.levelName !== group.levelName
    );
  }
}

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  private _area: Area;
  private _status: string;
  private _students: Student[] = []; // Modify the array so that it has a valid toSorted method*
  private _directionName: string;
  private _levelName: string;

  constructor(
    directionName: string,
    levelName: string,
    area: Area,
    status: string
  ) {
    this._directionName = directionName;
    this._levelName = levelName;
    this._area = area;
    this._status = status;
  }

  get area(): Area {
    return this._area;
  }

  get status(): string {
    return this._status;
  }

  get students(): Student[] {
    return this._students;
  }

  get directionName(): string {
    return this._directionName;
  }

  get levelName(): string {
    return this._levelName;
  }

  set status(newStatus: string) {
    this._status = newStatus;
  }

  addStudent(student: Student): void {
    this._students.push(student);
  }

  removeStudent(student: Student): void {
    this._students = this._students.filter(
      (currStudent) => currStudent.fullName !== student.fullName
    );
  }

  showPerformance(): Student[] {
    const studentsCopy: Student[] = JSON.parse(JSON.stringify(this._students));
    const sortedStudents: Student[] = studentsCopy.sort(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );
    return sortedStudents;
  }
}

class Student {
  // implement 'set grade' and 'set visit' methods

  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;
  private _grades: { [key: string]: number }[] = []; // workName: mark
  private _visits: { [key: string]: boolean }[] = []; // lesson: present

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(" ");
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  set grade(newGrade: { [key: string]: number }) {
    this._grades.push(newGrade);
  }

  set visit(newVisit: { [key: string]: boolean }) {
    this._visits.push(newVisit);
  }

  getPerformanceRating(): number {
    const gradeArrays: Array<number[]> = this._grades.map((currGrade) => {
      return Object.values(currGrade)[0] ? Object.values(currGrade) : [0];
    });
    const gradeValue: number = gradeArrays.reduce(
      (acc, grade) => acc + grade[0],
      0
    );

    if (gradeValue === 0) return 0;

    const averageGrade: number = gradeValue / gradeArrays.length;

    const attendancePercentage: number =
      (this._visits
        .flatMap((present) => Object.values(present))
        .filter((present) => present).length /
        this._visits.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}

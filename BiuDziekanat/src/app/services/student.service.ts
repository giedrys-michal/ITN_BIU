import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { STUDENTS } from '../models/mock-students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _students = STUDENTS;

  getStudents(): Student[] {
    return this._students;
  }

  private _student: Student = { id: 0, name: "Michał", lastName: "Giedryś" };
  public get student(): Student {
    return this._student;
  }
  public set student(value: Student) {
    this._student = value;
  }

  constructor() {}
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Student } from '../models/student';
import { STUDENTS } from '../models/mock-students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _students = STUDENTS;
  private _initStudent = new BehaviorSubject<Student>({ id: 0, name: "Michał", lastName: "Giedryś" });

  student = this._initStudent.asObservable();

  getStudents(): Student[] {
    return this._students;
  }

  setStudent(student: Student): void {
    this._initStudent.next(student);
  }

  getStudent(): Student {
    return this._initStudent.value;
  }

  constructor() {}
}

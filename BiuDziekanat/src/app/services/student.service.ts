import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Student } from '../models/student';
import { STUDENTS } from '../models/mock-students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _students: Student[] = STUDENTS;
  private _initStudent = new BehaviorSubject<Student>(this.getStudents()[0]);

  student = this._initStudent.asObservable();

  getStudents(): Student[] {
    return this._students;
  }

  addStudent(student: Student): void {
    this.setStudent(student);
    this.getStudents().push(this.getStudent());
  }

  setStudent(student: Student): void {
    this._initStudent.next(student);
  }

  getStudent(): Student {
    return this._initStudent.value;
  }

  constructor() {}
}

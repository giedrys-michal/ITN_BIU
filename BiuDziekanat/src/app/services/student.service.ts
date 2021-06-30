import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Student } from 'src/app/models/student';
import { STUDENTS } from 'src/app/models/mock-students';
import { Group } from 'src/app/models/group';
import { GroupService } from 'src/app/services/group.service';
import { MainStateService } from './main-state.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // GROUPS
  private _groups: Group[] = [];

  public get groups(): Group[] {
    return this._groups;
  }

  // STUDENTS
  private _students = new BehaviorSubject<Array<Student>>(STUDENTS);
  students = this._students.asObservable();

  getStudents(): Student[] {
    return this._students.value;
  }
  setStudents(students: Student[]): void {
    this._students.next(students);
  }

  // STUDENT
  private _currentStudent = new BehaviorSubject<Student>(this.getStudents()[0]);
  currentStudent = this._currentStudent.asObservable();

  getStudent(): Student {
    return this._currentStudent.value;
  }

  setStudent(student: Student): void {
    this._currentStudent.next(student);
  }

  addStudent(student: Student): void {
    this.setStudent(student);
    this.getStudents().push(this.getStudent());
    this.setStudentAvailableGroups();
  }

  // STUDENT GROUPS
  private _studentGroups = new BehaviorSubject<Array<Group>>(this.getStudents()[0].groups);
  studentGroups = this._studentGroups.asObservable();

  getStudentGroups(): Group[] {
    return this._currentStudent.value.groups;
  }

  setStudentGroups(groups: Group[]): void {
    groups.sort((a, b) => a.id - b.id);
    this._currentStudent.value.groups = groups;
  }

  getStudentAvailableGroups(): Array<Group> {
    return this._studentGroups.value;
  }

  setStudentAvailableGroups(): void {
    let remainder: Group[] = [];

    this.groups.forEach(g => {
      let found = false;
      this.getStudentGroups().forEach(sg => {
        if (g.id == sg.id) {
          found = true;
          return;
        }
      })
      if (!found) remainder.push(g);
    });
    remainder.sort((a, b) => a.id - b.id);

    this._studentGroups.next(remainder);
  }

  constructor(private mss: MainStateService) {
    this._groups = this.mss.getGroups();
    this.setStudentAvailableGroups();
  }
}

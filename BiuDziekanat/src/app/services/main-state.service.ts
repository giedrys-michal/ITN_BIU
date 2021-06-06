import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Student } from 'src/app/models/student';
import { STUDENTS } from 'src/app/models/mock-students';
import { Group } from 'src/app/models/group';
import { GROUPS } from 'src/app/models/mock-groups';

@Injectable({
  providedIn: 'root'
})
export class MainStateService {
  // GROUPS
  private _groups = new BehaviorSubject<Array<Group>>(GROUPS);
  groups = this._groups.asObservable();

  getGroups(): Group[] {
    return this._groups.value;
  }
  setGroups(groups: Group[]) {
    this._groups.next(groups);
  }

  // CURRENT GROUP
  private _currentGroup = new BehaviorSubject<Group>(this.getGroups()[0]);
  currentGroup = this._currentGroup.asObservable();

  getCurrentGroup(): Group {
    return this._currentGroup.value;
  }
  setCurrentGroup(group: Group) {
    this._currentGroup.next(group);
  }


  // STUDENTS
  private _students = new BehaviorSubject<Array<Student>>(STUDENTS);
  students = this._students.asObservable();

  getStudents(): Student[] {
    return this._students.value;
  }
  setStudents(students: Student[]) {
    this._students.next(students);
  }

  // CURRENT STUDENT
  private _currentStudent = new BehaviorSubject<Student>(this.getStudents()[0]);
  currentStudent = this._currentStudent.asObservable();

  getCurrentStudent(): Student {
    return this._currentStudent.value;
  }
  setCurrentStudent(student: Student) {
    this._currentStudent.next(student);
  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Group } from 'src/app/models/group';
import { Student } from 'src/app/models/student';
import { MainStateService } from './main-state.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  // STUDENTS
  private _students: Student[] = [];

  getStudents(): Student[] {
    return this._students;
  }

  setStudents(students: Student[]): void {
    this._students = students;
  }
  
  // GROUPS
  private _groups: Group[] = [];

  getGroups(): Group[] {
    return this._groups;
  }

  setGroups(groups: Group[]): void {
    this._groups = groups;
  }

  // GROUP
  private _currentGroup = new BehaviorSubject<Group>(this.getGroups()[0]);
  currentGroup = this._currentGroup.asObservable();

  getGroup(): Group {
    return this._currentGroup.value;
  }

  setGroup(group: Group): void {
    this._currentGroup.next(group);
  }

  addGroup(group: Group): void {
    this.setGroup(group);
    this.getGroups().push(this.getGroup());
  }

  // GROUP STUDENTS
  private _groupStudents = new BehaviorSubject<Array<Student>>(this.getStudents());
  groupStudents = this._groupStudents.asObservable();

  getGroupStudents(): Student[] {
    return this._groupStudents.value;
  }

  setGroupStudents(students: Student[]): void {
    this._groupStudents.next(students);
  }

  findGroupStudents(): Student[] {
    let students: Student[] = [];
    let studentsWithGroups = this.getStudentsWithGroups(this.mss.getStudents());
    studentsWithGroups.forEach(s => {
      let wasGroupFound = this.getGroupByName(s.groups, this.getGroup().name);
      if (wasGroupFound) {
        students.push(s);
      }      
    });
    return students;
  }

  getStudentsWithGroups(students: Student[]): Student[] {
    let studentsWithGroups: Student[] = [];
    students.forEach(s => {
      if (s.groups.length > 0) {
        studentsWithGroups.push(s);
      }
      return;
    });
    return studentsWithGroups;
  }

  getGroupByName(groups: Group[], name: string): boolean {
    let found = false;
    groups.forEach(g => {
      if (g.name === name) {
        found = true;
      }
    });
    return found;
  }

  constructor(private mss: MainStateService) {
    this.mss.groups.subscribe(result => {
      this._groups = result;
    });
    this.mss.currentGroup.subscribe(result => {
      this.setGroup(result);
    });
    this.mss.students.subscribe(result => {
      this.setStudents(result);
    })
   }
}

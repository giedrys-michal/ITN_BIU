import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Student } from 'src/app/models/student';
import { STUDENTS } from 'src/app/models/mock-students';
import { Group } from 'src/app/models/group';
import { GROUPS } from 'src/app/models/mock-groups';
import { Course } from 'src/app/models/course';
import { COURSES } from 'src/app/models/mock-courses';

@Injectable({
  providedIn: 'root'
})
export class MainStateService {
  // COURSES
  private _courses = new BehaviorSubject<Array<Course>>(COURSES);
  courses = this._courses.asObservable();

  getCourses(): Course[] {
    return this._courses.value;
  }
  setCourses(courses: Course[]): void {
    this._courses.next(courses);
  }

  // CURRENT COURSE
  private _currentCourse = new BehaviorSubject<Course>(this.getCourses()[0]);
  currentCourse = this._currentCourse.asObservable();

  getCurrentCourse(): Course {
    return this._currentCourse.value;
  }
  setCurrentCourse(course: Course) {
    this._currentCourse.next(course);
  }

  // GROUPS
  private _groups = new BehaviorSubject<Array<Group>>(GROUPS);
  groups = this._groups.asObservable();

  getGroups(): Group[] {
    return this._groups.value;
  }
  setGroups(groups: Group[]): void {
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

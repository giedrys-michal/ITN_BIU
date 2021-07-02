import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Student } from 'src/app/models/student';
import { STUDENTS } from 'src/app/models/mock-students';
import { Group } from 'src/app/models/group';
import { MainStateService } from './main-state.service';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // COURSES
  private _courses: Course[] = [];

  getCourses(): Course[] {
    return this._courses;
  }
  setCourses(courses: Course[]): void {
    this._courses = courses;
  }

  // GROUPS
  private _groups: Group[] = [];

  getGroups(): Group[] {
    return this._groups;
  }
  setGroups(groups: Group[]): void {
    this._groups = groups;
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

  getCurrentStudent(): Student {
    return this._currentStudent.value;
  }
  setCurrentStudent(student: Student): void {
    this._currentStudent.next(student);
    this.findStudentCourses();
  }

  addStudent(student: Student): void {
    this.setCurrentStudent(student);
    this.getStudents().push(this.getCurrentStudent());
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

    this.getGroups().forEach(g => {
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

  // STUDENT COURSES
  private _studentCourses = new BehaviorSubject<Array<Course>>(this.getCourses());
  studentCourses = this._studentCourses.asObservable();

  getStudentCourses(): Course[] {
    return this._studentCourses.value;
  }
  setStudentCourses(courses: Course[]) {
    this._studentCourses.next(courses);
  }

  findStudentCourses(): void {
    let studentCourses: Course[] = [];
    let groups: Group[] = this.getStudentGroups();

    for (let group of groups) {
      studentCourses = studentCourses.concat(group.courses);
    }
    
    let uniqueCourses: Course[] = [...new Set(studentCourses)];
    this.setStudentCourses(uniqueCourses.sort((a, b) => a.id - b.id));
  }

  constructor(
    private mss: MainStateService,
  ) {
    this.mss.currentStudent.subscribe(result => {
      this.setCurrentStudent(result);
    });
    this.mss.groups.subscribe(result => {
      this.setGroups(result);
    });
    this.mss.courses.subscribe(result => {
      this.setCourses(result);
    });

    this.setStudentAvailableGroups();
    this.findStudentCourses();
  }
}

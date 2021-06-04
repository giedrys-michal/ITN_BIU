import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Course } from '../models/course';
import { COURSES } from '../models/mock-courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private _courses: Course[] = COURSES;
  private _initCourse = new BehaviorSubject<Course>(this.getCourses()[0]);

  // course = this._initCourse.asObservable();

  getCourses() {
    return this._courses;
  }

  addCourse(course: Course): void {
    this.setCourse(course);
    this.getCourses().push(this.getCourse());
  }

  setCourse(course: Course): void {
    this._initCourse.next(course);
  }

  getCourse(): Course {
    return this._initCourse.value;
  }

  constructor() { }
}

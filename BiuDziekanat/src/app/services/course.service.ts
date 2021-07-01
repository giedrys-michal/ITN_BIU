import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Course } from 'src/app/models/course';
import { Group } from 'src/app/models/group';
import { MainStateService } from 'src/app/services/main-state.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  // COURSES
  private _courses: Course[] = [];

  getCourses(): Course[] {
    return this._courses;
  }

  setCourses(courses: Course[]) {
    this._courses = courses;
  }

  // COURSE
  private _currentCourse = new BehaviorSubject<Course>(this.getCourses()[0]);
  currentGroup = this._currentCourse.asObservable();

  getCurrentCourse(): Course {
    return this._currentCourse.value;
  }

  setCurrentCourse(course: Course): void {
    this._currentCourse.next(course);
  }

  addCourse(course: Course): void {
    this.setCurrentCourse(course);
    this.getCourses().push(this.getCurrentCourse());
  }

  // GROUPS
  private _groups: Group[] = [];

  getGroups(): Group[] {
    return this._groups;
  }

  // COURSE GROUPS
  private _courseGroups = new BehaviorSubject<Array<Group>>(this.getGroups());
  courseGroups = this._courseGroups.asObservable();

  getCourseGroups(): Group[] {
    return this._courseGroups.value;
  }
  setCourseGroups(groups: Group[]): void {
    this._courseGroups.next(groups);
  }

  findCourseGroups(): Group[] {
    let groups: Group[] = [];
    let groupsWithCourses = this.getGroupsWithCourses(this.mss.getGroups());
    groupsWithCourses.forEach(g => {
      let wasCourseFound = this.getCourseByName(g.courses, this.getCurrentCourse().name);
      if (wasCourseFound) {
        groups.push(g);
      }      
    });
    return groups;
  }

  getGroupsWithCourses(groups: Group[]): Group[] {
    let groupsWithCourses: Group[] = [];
    groups.forEach(g => {
      if (g.courses.length > 0) {
        groupsWithCourses.push(g);
      }
      return;
    });
    return groupsWithCourses;
  }

  getCourseByName(courses: Course[], name: string): boolean {
    let found = false;
    courses.forEach(c => {
      if (c.name === name) {
        found = true;
      }
    });
    return found;
  }

  constructor(private mss: MainStateService) {
    this.mss.courses.subscribe(result => {
      this._courses = result;
    })
    this.mss.currentCourse.subscribe(result => {
      this.setCurrentCourse(result);
    });
  }
}

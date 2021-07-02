import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

import { Group } from 'src/app/models/group';
import { CourseService } from 'src/app/services/course.service';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-course-details-view',
  templateUrl: './course-details-view.component.html',
  styleUrls: ['./course-details-view.component.css']
})
export class CourseDetailsViewComponent implements OnInit {
  // COURSES
  private _courses: Course[] = [];

  getCourses(): Course[] {
    return this._courses;
  }

  // COURSE
  private _currentCourse: Course = this._courses[0];

  getCurrentCourse(): Course {
    return this._currentCourse;
  }
  setCurrentCourse(course: Course) {
    this._currentCourse = course;
  }

  // COURSE GROUPS
  private _courseGroups: Group[] = [];

  getCourseGroups(): Group[] {
    return this._courseGroups;
  }
  setCourseGroups(groups: Group[]): void {
    this._courseGroups = groups;
  }

  constructor(
    private coursesService: CourseService
  ) {
    this.coursesService.currentGroup.subscribe(result => {
      this.setCurrentCourse(result);
    });
    this.coursesService.courseGroups.subscribe(result => {
      this.setCourseGroups(result);
    });
  }

  ngOnInit(): void {
    this._courses = this.coursesService.getCourses();
    this.setCourseGroups(this.coursesService.findCourseGroups());
  }
}

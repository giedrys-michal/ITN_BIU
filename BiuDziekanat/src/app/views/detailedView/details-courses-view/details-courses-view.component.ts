import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { Student } from 'src/app/models/student';
import { MainStateService } from 'src/app/services/main-state.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-details-courses-view',
  templateUrl: './details-courses-view.component.html',
  styleUrls: ['./details-courses-view.component.css']
})
export class DetailsCoursesViewComponent implements OnInit {
  // STUDENTS
  private _students: Student[] = [];

  getStudents(): Student[] {
    return this._students;
  }
  setStudents(students: Student[]): void {
    this._students = students;
  }

  // CURRENT STUDENT
  private _currentStudent: Student = this.getStudents()[0];

  getCurrentStudent(): Student {
    return this._currentStudent;
  }
  setCurrentStudent(student: Student): void {
    this._currentStudent = student;
  }

  // STUDENT COURSES
  private _studentCourses: Course[] = [];

  getStudentCourses(): Course[] {
    return this._studentCourses;
  }
  setStudentCourses(courses: Course[]): void {
    this._studentCourses = courses;
  }

  onCourseClick(course: Course): void {
    console.log("Clicked on : -- " + course.name);
  }

  constructor(
    private mss: MainStateService,
    private studentService: StudentService
  ) {
    this.mss.students.subscribe(result => {
      this.setStudents(result);
    });
    this.studentService.studentCourses.subscribe(result => {
      this.setStudentCourses(result);
    });
    this.studentService.currentStudent.subscribe(result => {
      this.setCurrentStudent(result);
    });
  }

  ngOnInit(): void {}
}

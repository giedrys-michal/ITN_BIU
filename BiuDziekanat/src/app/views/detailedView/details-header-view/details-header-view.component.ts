import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-details-header-view',
  templateUrl: './details-header-view.component.html',
  styleUrls: ['./details-header-view.component.css']
})
export class DetailsHeaderViewComponent implements OnInit {
  // STUDENTS
  private _students: Student[] = [];

  getStudents(): Student[] {
    return this._students;
  }
  setStudents(students: Student[]): void {
    this._students = students;
  }

  // STUDENT
  private _currentStudent: Student = this.getStudents()[0];

  getCurrentStudent(): Student {
    return this._currentStudent;
  }
  setCurrentStudent(student: Student) {
    this._currentStudent = student;
  }

  constructor(private studentService: StudentService) {
    this.studentService.currentStudent.subscribe(result => {
      this.setCurrentStudent(result);
    });
  }

  ngOnInit(): void {

  }
}

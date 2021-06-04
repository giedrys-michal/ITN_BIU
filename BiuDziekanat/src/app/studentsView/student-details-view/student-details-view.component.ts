import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-details-view',
  templateUrl: './student-details-view.component.html',
  styleUrls: ['./student-details-view.component.css']
})
export class StudentDetailsViewComponent implements OnInit {
  students: Student[] = [];
  currentStudent: Student = this.students[0];

  constructor(private studentService: StudentService) {
    this.students = studentService.getStudents();
    studentService.student.subscribe(result => {
      this.currentStudent = result;
    })
  }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

}

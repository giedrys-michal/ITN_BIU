import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-details-main-view',
  templateUrl: './details-main-view.component.html',
  styleUrls: ['./details-main-view.component.css'],
  providers: [StudentService]
})
export class DetailsMainViewComponent implements OnInit {

  currentStudent: Student = { id: 0, name: "", lastName: "" }

  constructor(private studentService: StudentService) {
    this.studentService.student.subscribe(result => {
      this.currentStudent = result;
    })
  }

  ngOnInit(): void {}

}

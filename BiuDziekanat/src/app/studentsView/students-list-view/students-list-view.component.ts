import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-students-list-view',
  templateUrl: './students-list-view.component.html',
  styleUrls: ['./students-list-view.component.css']
})
export class StudentsListViewComponent implements OnInit {
  public modalRef: BsModalRef;
  students: Student[] = [];

  constructor(private modalService: BsModalService, private studentService: StudentService) {
    this.students = studentService.getStudents();
    this.modalRef = new BsModalRef();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

}

import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-students-list-view',
  templateUrl: './students-list-view.component.html',
  styleUrls: ['./students-list-view.component.css']
})
export class StudentsListViewComponent implements OnInit {
  public modalRef: BsModalRef;
  students: Student[] = [];

  newStudentProps = {
    name: "",
    lastName: "",
    msgStyle: "",
    msgText: "",
    wasStudentAdditionAttempted: false,
  }

  constructor(private modalService: BsModalService, private studentService: StudentService, private groupService: GroupService) {
    this.modalRef = new BsModalRef();
    this.studentService.students.subscribe(result => {
      this.students = result;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  hideModal() {
    this.newStudentProps.name = "";
    this.newStudentProps.lastName = "";
    this.newStudentProps.wasStudentAdditionAttempted = false;
    this.modalRef.hide();
  }

  onAddStudent(): void {
    this.newStudentProps.wasStudentAdditionAttempted = true;
    let name = this.newStudentProps.name;
    let lastName = this.newStudentProps.lastName;
    
    if (this.isStudentLastNameCorrect(lastName)) {
      this.addNewStudent(name, lastName);
      this.newStudentProps.msgStyle = "text-success";
      this.newStudentProps.msgText = "Student dodany poprawnie!";
    } else {
      this.newStudentProps.msgStyle = "text-danger";
      this.newStudentProps.msgText = "Nazwisko zbyt krótkie...";
    }
  }

  addNewStudent(name: string, lastName: string) {
    let lastStudentId = this.students[this.students.length - 1].id;
    let newStudent: Student = {
      id: lastStudentId + 1,
      name: name,
      lastName: lastName,
      groups: []
    }
    this.studentService.addStudent(newStudent);
  }

  isStudentLastNameCorrect(lastName: string): boolean {
    return (lastName.length > 1) ? true : false;
  }

  onListButtonClick(student: Student): void {
    this.studentService.setCurrentStudent(student);
    this.studentService.setStudentAvailableGroups();
  }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }
}

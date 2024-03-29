import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Group } from 'src/app/models/group';
import { Student } from 'src/app/models/student';
import { GroupService } from 'src/app/services/group.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-group-details-view',
  templateUrl: './group-details-view.component.html',
  styleUrls: ['./group-details-view.component.css']
})
export class GroupDetailsViewComponent implements OnInit {
  public modalRef: BsModalRef;
  
  // STUDENTS
  private _students: Student[] = [];

  getStudents(): Student[] {
    return this._students;
  }

  // AVAILABLE STUDENTS
  private _availableStudents: Student[] = [];

  getAvailableStudents(filter: string): Student[] {
    if (filter != "") {
      return this._availableStudents.filter((s) => s.lastName.toLowerCase().startsWith(filter.toLowerCase()));
    }
    return this._availableStudents;
  }

  updateAvailableStudents(): void {
    let availableStudents = this.getStudents().slice();
    let groupStudents = this.getGroupStudents().slice();

    if (groupStudents.length > 0) {
      groupStudents.forEach(student => {
        availableStudents.splice(availableStudents.indexOf(student), 1);
      });
    }

    this._availableStudents = availableStudents;
  }

  // GROUPS
  private _groups: Group[] = [];

  getGroups(): Group[] {
    return this._groups;
  }

  // GROUP
  private _currentGroup: Group = this._groups[0];

  getCurrentGroup(): Group {
    return this._currentGroup;
  }

  // GROUP STUDENTS
  private _groupStudents: Student[] = [];
  
  getGroupStudents(): Student[] {
    return this._groupStudents;
  }
  setGroupStudents(students: Student[]): void {
    this._groupStudents = students;
  }

  // MODAL METHODS
  public studentFilter: string = "";

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
    this.updateAvailableStudents();
  }

  hideModal(): void {
    this.modalRef.hide();
  }

  // STUDENT METHODS
  onAddStudent(studentToAdd: Student): void {
    let studentGroups = studentToAdd.groups;
    let currentGroup = this.getCurrentGroup();

    if (studentGroups.indexOf(currentGroup) == -1) {
      studentGroups.push(currentGroup);
    }

    this.setGroupStudents(this.groupService.findGroupStudents());
    this.updateAvailableStudents();
  }

  constructor(
    private modalService: BsModalService,
    private groupService: GroupService,
    private studentService: StudentService
  ) {
    this.modalRef = new BsModalRef();
    this.groupService.currentGroup.subscribe(result => {
      this._currentGroup = result;
    });
    this.groupService.groupStudents.subscribe(result => {
      this._groupStudents = result;
    });
    this.studentService.students.subscribe(result => {
      this._students = result;
    });
  }

  ngOnInit(): void {
    this._groups = this.groupService.getGroups();
    this.setGroupStudents(this.groupService.findGroupStudents());
    this.updateAvailableStudents();
  }
}

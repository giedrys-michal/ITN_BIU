import { Component, OnInit } from '@angular/core';
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
  // STUDENTS
  private _students: Student[] = [];

  getStudents(): Student[] {
    return this._students;
  }

  // GROUPS
  private _groups: Group[] = [];

  getGroups(): Group[] {
    return this._groups;
  }

  // GROUP
  private _currentGroup: Group = this._groups[0];

  getGroup(): Group {
    return this._currentGroup;
  }

  // GROUP STUDENTS
  private _groupStudents: Student[] = [];

  setGroupStudents(students: Student[]): void {
    this._groupStudents = students;
  }

  getGroupStudents(): Student[] {
    return this._groupStudents;
  }

  constructor(private groupService: GroupService, private studentService: StudentService) {
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
  }

}

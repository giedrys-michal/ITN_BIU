import { Component, OnInit } from '@angular/core';

import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { Group } from 'src/app/models/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-student-details-view',
  templateUrl: './student-details-view.component.html',
  styleUrls: ['./student-details-view.component.css']
})
export class StudentDetailsViewComponent implements OnInit {
  students: Student[] = [];
  groups: Group[] = [];
  currentStudent: Student = this.students[0];
  remainingGroups: Group[] = [];

  getStudentGroupDelta(): void {
    let initGroups = this.currentStudent.groups;
    let groupsReminder: Group[] = [];

    this.groups.forEach(g => {
      let found = false;
      initGroups.forEach(i => {
        if (g.id == i.id) {
          found = true;
          return;
        }
      })
      if (!found) groupsReminder.push(g);
    })

    this.remainingGroups = groupsReminder;
    console.log(this.remainingGroups);
  }

  constructor(private studentService: StudentService, private groupService: GroupService) {
    this.students = this.studentService.getStudents();
    this.groups = this.groupService.getGroups();
    studentService.student.subscribe(result => {
      this.currentStudent = result;
    })
  }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
    this.getStudentGroupDelta();
  }

}

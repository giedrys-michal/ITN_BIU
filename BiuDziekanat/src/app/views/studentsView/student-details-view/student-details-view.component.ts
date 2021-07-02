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

  onAddToGroup(group: Group): void {
    let allGroups = this.studentService.getStudentGroups();
    let newId = group.id;

    if (allGroups.length > 0) {

      for (let i = 0; i < allGroups.length; i++) {
        let currentId = allGroups[i].id;

        if (newId < currentId) {
          allGroups.splice(i, 0, group);
          break;
        } else if (i < allGroups.length - 1) {
          continue;
        } else {
          allGroups.splice(i + 1, 0, group);
          break;
        }
      }
      
    } else {
      this.studentService.getStudentGroups().push(group);
    }
    this.studentService.setStudentAvailableGroups();
  }

  onRemoveFromGroup(group: Group): void {
    let groups = this.studentService.getStudentGroups();
    groups.splice(groups.indexOf(group), 1);
    groups.sort((a, b) => a.id - b.id);
    this.studentService.setStudentGroups(groups);
    this.studentService.setStudentAvailableGroups();
  }

  constructor(private studentService: StudentService, private groupService: GroupService) {
    this.studentService.students.subscribe(result => {
      this.students = result;
    });
    this.groups = this.groupService.getGroups();
    this.studentService.currentStudent.subscribe(result => {
      this.currentStudent = result;
    });
    this.studentService.studentGroups.subscribe(result => {
      this.remainingGroups = result;
    });
  }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

}

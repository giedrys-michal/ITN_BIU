import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group';
import { Student } from 'src/app/models/student';
import { MainStateService } from 'src/app/services/main-state.service';

@Component({
  selector: 'app-details-groups-view',
  templateUrl: './details-groups-view.component.html',
  styleUrls: ['./details-groups-view.component.css']
})
export class DetailsGroupsViewComponent implements OnInit {
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

  // STUDENT GROUPS
  private _studentGroups: Group[] = [];

  getStudentGroups(): Group[] {
    return this.getCurrentStudent().groups;
  }

  // GROUPS
  private _groups: Group[] = [];

  getGroups(): Group[] {
    return this._groups;
  }
  setGroups(groups: Group[]): void {
    this._groups = groups;
  }

  onGroupClick(group: Group): void {
    console.log("Clicked group: -- " + group.name);
  }

  constructor(private mss: MainStateService) {
    this.mss.students.subscribe(result => {
      this.setStudents(result);
    });
    this.mss.currentStudent.subscribe(result => {
      this.setCurrentStudent(result);
    });
    this.mss.groups.subscribe(result => {
      this.setGroups(result);
    });
   }

  ngOnInit(): void { }
}

import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { GroupService } from 'src/app/services/group.service';
import { Group } from 'src/app/models/group';
import { MainStateService } from 'src/app/services/main-state.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-groups-list-view',
  templateUrl: './groups-list-view.component.html',
  styleUrls: ['./groups-list-view.component.css']
})
export class GroupsListViewComponent implements OnInit {
  public modalRef: BsModalRef;
  groups: Group[] = [];

  newGroupProps = {
    name: "",
    msgStyle: "",
    msgText: "",
    wasGroupAdditionAttempted: false,
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  hideModal() {
    this.newGroupProps.name = "";
    this.newGroupProps.wasGroupAdditionAttempted = false;
    this.modalRef.hide();
  }

  onAddGroup(): void {
    this.newGroupProps.wasGroupAdditionAttempted = true;
    let name = this.newGroupProps.name;
    
    if (this.isGroupNameCorrect(name)) {
      if (this.isGroupOnList(name)) {
        this.newGroupProps.msgStyle = "text-danger";
        this.newGroupProps.msgText = "Grupa o takiej nazwie już istnieje, proszę podać inną...";
      } else {
        this.addNewGroup(name);
        this.newGroupProps.msgStyle = "text-success";
        this.newGroupProps.msgText = "Grupa dodana poprawnie!";
      }
    } else {
      this.newGroupProps.msgStyle = "text-danger";
      this.newGroupProps.msgText = "Nazwa grupy zbyt krótka, proszę podać inną...";
    }
  }

  addNewGroup(name: string) {
    let lastGroupId = this.groups[this.groups.length - 1].id;
    let newGroup: Group = { id: lastGroupId + 1, name: name, courses: [] };

    this.groupService.addGroup(newGroup);
    this.mss.setCurrentGroup(newGroup);

    let groupStudents = this.groupService.findGroupStudents();

    this.groupService.setGroupStudents(groupStudents);
    this.studentService.setStudentAvailableGroups();
  }

  isGroupNameCorrect(name: string): boolean {
    return (name.length > 3) ? true : false;
  }

  isGroupOnList(name: string): boolean {
    let isGroupOnList: boolean = false;

    this.groups.forEach(g => {
      if (g.name === name)
        isGroupOnList = true;
    });
    
    return isGroupOnList;
  }

  onGroupClick(group: Group): void {
    this.mss.setCurrentGroup(group);
    let groupStudents = this.groupService.findGroupStudents();
    this.groupService.setGroupStudents(groupStudents);
  }

  constructor(
    private modalService: BsModalService,
    private mss: MainStateService,
    private groupService: GroupService,
    private studentService: StudentService
  ) {
    this.groups = mss.getGroups();
    this.modalRef = new BsModalRef();
  }

  ngOnInit(): void {
    this.groups = this.mss.getGroups();
  }
}

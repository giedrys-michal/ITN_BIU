import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { GroupService } from '../../services/group.service';
import { Group } from '../../models/group';

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

  constructor(private modalService: BsModalService, private groupService: GroupService) {
    this.groups = groupService.getGroups();
    this.modalRef = new BsModalRef();
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
      // group name ok
      if (this.isGroupOnList(name)) {
        // group exists
        console.log("Group already exists, select different name!");
        this.newGroupProps.msgStyle = "text-danger";
        this.newGroupProps.msgText = "Grupa o takiej nazwie już istnieje, proszę podać inną...";
      } else {
        // group ready to add
        this.addNewGroup(name);
        this.newGroupProps.msgStyle = "text-success";
        this.newGroupProps.msgText = "Grupa dodana poprawnie!";
      }
    } else {
      // group name to short
      this.newGroupProps.msgStyle = "text-danger";
      this.newGroupProps.msgText = "Nazwa grupy zbyt krótka, proszę podać inną...";
    }
  }

  addNewGroup(name: string) {
    let lastGroupId = this.groups[this.groups.length - 1].id;
    let newGroup: Group = {
      id: lastGroupId + 1,
      name: name
    }
    this.groupService.addGroup(newGroup);
    console.log("Group added: "+ name);
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

  ngOnInit(): void {
    this.groups = this.groupService.getGroups();
  }

}

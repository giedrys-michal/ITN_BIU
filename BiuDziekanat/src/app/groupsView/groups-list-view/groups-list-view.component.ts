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

  constructor(private modalService: BsModalService, private groupService: GroupService) {
    this.groups = groupService.getGroups();
    this.modalRef = new BsModalRef();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.groups = this.groupService.getGroups();
  }

}

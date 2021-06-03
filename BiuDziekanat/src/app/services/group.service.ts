import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Group } from '../models/group';
import { GROUPS } from '../models/mock-groups';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private _groups: Group[] = GROUPS;
  private _initGroup = new BehaviorSubject<Group>(this.getGroups()[0]);

  //group = this._initGroup.asObservable();

  getGroups() {
    return this._groups;
  }

  addGroup(group: Group): void {
    this.setGroup(group);
    this.getGroups().push(this.getGroup());
  }

  setGroup(group: Group): void {
    this._initGroup.next(group);
  }

  getGroup(): Group {
    return this._initGroup.value;
  }

  constructor() { }
}

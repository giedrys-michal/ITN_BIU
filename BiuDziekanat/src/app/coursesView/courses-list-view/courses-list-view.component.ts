import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-courses-list-view',
  templateUrl: './courses-list-view.component.html',
  styleUrls: ['./courses-list-view.component.css']
})
export class CoursesListViewComponent implements OnInit {
  public modalRef: BsModalRef;
  courses: Course[] = [];

  constructor(private modalService: BsModalService, private courseService: CourseService) {
    this.courses = courseService.getCourses();
    this.modalRef = new BsModalRef();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

}

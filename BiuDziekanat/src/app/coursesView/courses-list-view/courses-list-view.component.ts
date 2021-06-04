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

  newCourseProps = {
    name: "",
    msgStyle: "",
    msgText: "",
    wasCourseAdditionAttempted: false,
  }

  constructor(private modalService: BsModalService, private courseService: CourseService) {
    this.courses = courseService.getCourses();
    this.modalRef = new BsModalRef();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  hideModal() {
    this.newCourseProps.name = "";
    this.newCourseProps.wasCourseAdditionAttempted = false;
    this.modalRef.hide();
  }

  onAddCourse(): void {
    this.newCourseProps.wasCourseAdditionAttempted = true;
    let name = this.newCourseProps.name;
    
    if (this.isCourseNameCorrect(name)) {
      if (this.isCourseOnList(name)) {
        console.log("Course already exists, select different name!");
        this.newCourseProps.msgStyle = "text-danger";
        this.newCourseProps.msgText = "Przedmiot o takiej nazwie już istnieje, proszę podać inną...";
      } else {
        this.addNewCourse(name);
        this.newCourseProps.msgStyle = "text-success";
        this.newCourseProps.msgText = "Przedmiot dodany poprawnie!";
      }
    } else {
      this.newCourseProps.msgStyle = "text-danger";
      this.newCourseProps.msgText = "Nazwa Przedmiotu zbyt krótka, proszę podać inną...";
    }
  }

  addNewCourse(name: string) {
    let lastCourseId = this.courses[this.courses.length - 1].id;
    let newCourse: Course = {
      id: lastCourseId + 1,
      name: name
    }
    this.courseService.addCourse(newCourse);
    console.log("Course added: "+ name);
  }

  isCourseNameCorrect(name: string): boolean {
    return (name.length > 3) ? true : false;
  }

  isCourseOnList(name: string): boolean {
    let isCourseOnList: boolean = false;
    this.courses.forEach(c => {
      if (c.name === name)
        isCourseOnList = true;
    });
    return isCourseOnList;
  }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

}

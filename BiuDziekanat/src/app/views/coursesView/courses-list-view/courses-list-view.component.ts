import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/course';
import { MainStateService } from 'src/app/services/main-state.service';

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

  onCourseClick(course: Course): void {
    this.mss.setCurrentCourse(course);
    let courseGroups = this.courseService.findCourseGroups();
    this.courseService.setCourseGroups(courseGroups);
  }

  constructor(
    private modalService: BsModalService,
    private mss: MainStateService,
    private courseService: CourseService
  ) {
    this.courses = courseService.getCourses();
    this.modalRef = new BsModalRef();
  }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }
}

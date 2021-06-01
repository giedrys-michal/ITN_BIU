import { Component, OnInit} from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-details-search',
  templateUrl: './details-search.component.html',
  styleUrls: ['./details-search.component.css']
})
export class DetailsSearchComponent implements OnInit {

  studentSearch: string = "";
  students: Student[] = [];
  studentsFilteredSearchList: Student[] = [];
  isIdFilterChecked: string = "true";
  showSearchSuggestions: boolean = false;

  onStudentSelect(student: Student): void {
    console.log(student);
    this.studentService.setStudent(student);
  }

  onSearchInput(value: string): void {
    let filter = this.isIdFilterChecked
    let tempList: Student[] = [];
    if (filter === "true") {
      for (let student of this.students) {
        if (student.id.toString().startsWith(value.toString()))
          tempList.push(student);
      }
    } else {
      for (let student of this.students) {
        if (student.lastName.toString().toLowerCase().startsWith(value.toString().toLowerCase()))
          tempList.push(student);
      }
    }
    tempList = tempList.slice(0, 5);
    tempList = tempList.filter(function (el) {
      return el != null;
    })
    console.log(tempList);
    this.studentsFilteredSearchList = tempList;
  }

  onFocus(event: Event): void {
    this.showSearchSuggestions = true;
    if (!this.studentsFilteredSearchList.length) {
      this.studentsFilteredSearchList = this.students.slice(0, 5);
    }
  }

  onBlur(event: Event): void {
    window.onclick = (e: Event) => {
      let el = e.target as HTMLElement;
      if (!el.classList.contains("suggestionItem"))
        this.showSearchSuggestions = false;
    }
  }
  
  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
   }

  ngOnInit(): void {  }

}

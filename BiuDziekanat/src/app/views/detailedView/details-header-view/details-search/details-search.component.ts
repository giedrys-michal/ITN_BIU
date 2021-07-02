import { Component, OnInit} from '@angular/core';
import { Student } from 'src/app/models/student';
import { MainStateService } from 'src/app/services/main-state.service';
import { StudentService } from '../../../../services/student.service';

@Component({
  selector: 'app-details-search',
  templateUrl: './details-search.component.html',
  styleUrls: ['./details-search.component.css']
})
export class DetailsSearchComponent implements OnInit {
  public searchInputText: string = "";
  public isIdFilterChecked: string = "true";

  // SUGGESTIONS
  private _showSearchSuggestions: boolean = false;

  areSuggestionsVisible(): boolean {
    return this._showSearchSuggestions;
  }
  shouldShowSuggestions(showSuggestions: boolean): void {
    this._showSearchSuggestions = showSuggestions;
  }

  // STUDENTS
  private _students: Student[] = [];

  getStudents(): Student[] {
    return this._students;
  }
  setStudents(students: Student[]) {
    this._students = students;
  }

  private _studentsFilteredSearchList: Student[] = [];

  getStudentsFilteredSearchList(): Student[] {
    return this._studentsFilteredSearchList;
  }
  setStudentsFilteredSearchList(filteredStudentsList: Student[]) {
    this._studentsFilteredSearchList = filteredStudentsList;
  }

  onStudentSelect(event: Event, student: Student): void {
    console.log(student);
    let el = event.target as HTMLElement;
    this.searchInputText = el.innerHTML;
    this.mss.setCurrentStudent(student);
  }

  onSearchInput(value: string): void {
    this.shouldShowSuggestions(true);
    let filter = this.isIdFilterChecked;
    let tempList: Student[] = [];
    if (filter === "true") {
      for (let student of this.getStudents()) {
        if (student.id.toString().startsWith(value.toString()))
          tempList.push(student);
      }
    } else {
      for (let student of this.getStudents()) {
        if (
          student
          .lastName
          .toString()
          .toLowerCase()
          .startsWith(value.toString().toLowerCase())
        ) {
          tempList.push(student);
        }          
      }
    }
    tempList = tempList.slice(0, 5);
    tempList = tempList.filter((el) => {
      return el != null;
    })
    console.log(tempList);
    this.setStudentsFilteredSearchList(tempList);
  }

  onFocus(event: Event): void {
    this.shouldShowSuggestions(true);
    if (!this.getStudentsFilteredSearchList().length) {
      this.setStudentsFilteredSearchList(this._students.slice(0, 5));
    }
  }

  onBlur(event: Event): void {
    window.onclick = (e: Event) => {
      let el = e.target as HTMLElement;
      if (!el.classList.contains("suggestionItem"))
      this.shouldShowSuggestions(false);
    }
  }
  
  constructor(
    private mss: MainStateService
  ) {
    this.mss.students.subscribe(result => {
      this.setStudents(result);
    });
   }

  ngOnInit(): void {  }

}

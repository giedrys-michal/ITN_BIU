import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './commonComponents/nav/nav.component';
import { FooterComponent } from './commonComponents/footer/footer.component';
import { MainViewComponent } from './commonComponents/main-view/main-view.component';
import { DetailsMainViewComponent } from './detailedView/details-main-view/details-main-view.component';
import { DetailsGroupsViewComponent } from './detailedView/details-groups-view/details-groups-view.component';
import { DetailsCoursesViewComponent } from './detailedView/details-courses-view/details-courses-view.component';
import { DetailsSearchComponent } from './detailedView/details-main-view/details-search/details-search.component';
import { GroupsMainViewComponent } from './groupsView/groups-main-view/groups-main-view.component';
import { StudentsMainViewComponent } from './studentsView/students-main-view/students-main-view.component';
import { CoursesMainViewComponent } from './coursesView/courses-main-view/courses-main-view.component';
import { GroupsListViewComponent } from './groupsView/groups-list-view/groups-list-view.component';
import { GroupDetailsViewComponent } from './groupsView/group-details-view/group-details-view.component';
import { CoursesListViewComponent } from './coursesView/courses-list-view/courses-list-view.component';
import { CourseDetailsViewComponent } from './coursesView/course-details-view/course-details-view.component';
import { StudentDetailsViewComponent } from './studentsView/student-details-view/student-details-view.component';
import { StudentsListViewComponent } from './studentsView/students-list-view/students-list-view.component';

const appRoutes: Routes = [
  { path: 'studentinfo', component: MainViewComponent },
  { path: 'groups', component: GroupsMainViewComponent },
  { path: 'students', component: StudentsMainViewComponent },
  { path: 'courses', component: CoursesMainViewComponent },
  { path: '',   redirectTo: '/groups', pathMatch: 'full' },
  { path: '**', component: GroupsMainViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MainViewComponent,
    DetailsMainViewComponent,
    DetailsGroupsViewComponent,
    DetailsCoursesViewComponent,
    DetailsSearchComponent,
    GroupsMainViewComponent,
    StudentsMainViewComponent,
    CoursesMainViewComponent,
    GroupsListViewComponent,
    GroupDetailsViewComponent,
    CoursesListViewComponent,
    CourseDetailsViewComponent,
    StudentDetailsViewComponent,
    StudentsListViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // 'true' outputs routes to console
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

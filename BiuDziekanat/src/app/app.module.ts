import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './commonComponents/nav/nav.component';
import { FooterComponent } from './commonComponents/footer/footer.component';
import { DetailsContainerViewComponent } from './views/detailedView/details-container-view/details-container-view.component';
import { DetailsHeaderViewComponent } from './views/detailedView/details-header-view/details-header-view.component';
import { DetailsGroupsViewComponent } from './views/detailedView/details-groups-view/details-groups-view.component';
import { DetailsCoursesViewComponent } from './views/detailedView/details-courses-view/details-courses-view.component';
import { DetailsSearchComponent } from './views/detailedView/details-header-view/details-search/details-search.component';
import { GroupsMainViewComponent } from './views/groupsView/groups-main-view/groups-main-view.component';
import { StudentsMainViewComponent } from './views/studentsView/students-main-view/students-main-view.component';
import { CoursesMainViewComponent } from './views/coursesView/courses-main-view/courses-main-view.component';
import { GroupsListViewComponent } from './views/groupsView/groups-list-view/groups-list-view.component';
import { GroupDetailsViewComponent } from './views/groupsView/group-details-view/group-details-view.component';
import { CoursesListViewComponent } from './views/coursesView/courses-list-view/courses-list-view.component';
import { CourseDetailsViewComponent } from './views/coursesView/course-details-view/course-details-view.component';
import { StudentDetailsViewComponent } from './views/studentsView/student-details-view/student-details-view.component';
import { StudentsListViewComponent } from './views/studentsView/students-list-view/students-list-view.component';

const appRoutes: Routes = [
  { path: 'studentinfo', component: DetailsContainerViewComponent },
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
    DetailsContainerViewComponent,
    DetailsHeaderViewComponent,
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

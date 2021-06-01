import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './commonComponents/nav/nav.component';
import { FooterComponent } from './commonComponents/footer/footer.component';
import { MainViewComponent } from './commonComponents/main-view/main-view.component';
import { DetailsMainViewComponent } from './detailedView/details-main-view/details-main-view.component';
import { DetailsGroupsViewComponent } from './detailedView/details-groups-view/details-groups-view.component';
import { DetailsCoursesViewComponent } from './detailedView/details-courses-view/details-courses-view.component';
import { DetailsSearchComponent } from './detailedView/details-main-view/details-search/details-search.component';
import { GroupsMainViewComponent } from './groupsViewComponents/groups-main-view/groups-main-view.component';

const appRoutes: Routes = [
  { path: 'mainview', component: MainViewComponent },
  { path: 'groups', component: GroupsMainViewComponent },
  { path: '',   redirectTo: '/mainview', pathMatch: 'full' },
  { path: '**', component: DetailsMainViewComponent}
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
    GroupsMainViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // debuging purposes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

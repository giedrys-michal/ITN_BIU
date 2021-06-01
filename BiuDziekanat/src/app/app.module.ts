import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './commonComponents/nav/nav.component';
import { FooterComponent } from './commonComponents/footer/footer.component';
import { MainViewComponent } from './commonComponents/main-view/main-view.component';
import { DetailsMainViewComponent } from './detailedView/details-main-view/details-main-view.component';
import { DetailsGroupsViewComponent } from './detailedView/details-groups-view/details-groups-view.component';
import { DetailsCoursesViewComponent } from './detailedView/details-courses-view/details-courses-view.component';
import { DetailsSearchComponent } from './detailedView/details-main-view/details-search/details-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MainViewComponent,
    DetailsMainViewComponent,
    DetailsGroupsViewComponent,
    DetailsCoursesViewComponent,
    DetailsSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

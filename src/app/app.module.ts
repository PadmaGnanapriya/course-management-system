import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {SignInPageComponent} from './components/sign-in-page/sign-in-page.component';
import {ContactPageComponent} from './components/contact-page/contact-page.component';
import {DashboardPageComponent} from './components/dashboard-page/dashboard-page.component';
import {EventPageComponent} from './components/event-page/event-page.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {CoursePageComponent} from './layout/course-page/course-page.component';
import {RouterModule, Routes} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'sign-in', component: SignInPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'dashboard', component: DashboardPageComponent},
  {path: 'events', component: EventPageComponent},
  {path: 'course', component: CoursePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignInPageComponent,
    ContactPageComponent,
    DashboardPageComponent,
    EventPageComponent,
    HeaderComponent,
    FooterComponent,
    CoursePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

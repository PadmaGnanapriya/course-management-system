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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { BarchartComponent } from './components/admin-page/barchart/barchart.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { CourseRegisterFormComponent } from './components/admin-page/course-register-form/course-register-form.component';
import { StudentRegisterFormComponent } from './components/admin-page/student-register-form/student-register-form.component';
import { LecturerRegisterFormComponent } from './components/admin-page/lecturer-register-form/lecturer-register-form.component';
import { LecturerListComponent } from './components/admin-page/lecturer-list/lecturer-list.component';
import { StudentListComponent } from './components/admin-page/student-list/student-list.component';
import { CourseListComponent } from './components/admin-page/course-list/course-list.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'sign-in', component: SignInPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'dashboard', component: DashboardPageComponent},
  {path: 'events', component: EventPageComponent},
  {path: 'course', component: CoursePageComponent},
  {path: 'admin-page', component: AdminPageComponent},
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
    CoursePageComponent,
    AdminPageComponent,
    BarchartComponent,
    CourseRegisterFormComponent,
    StudentRegisterFormComponent,
    LecturerRegisterFormComponent,
    LecturerListComponent,
    StudentListComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

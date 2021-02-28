import {Component, OnInit} from '@angular/core';
import CourseDTO from '../../dto/CourseDTO';
import {CourseService} from '../../services/course.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  courseList: any[];

  constructor(public courseService: CourseService) {
  }

  ngOnInit(): void {
    this.loadAllCourses();
  }

  // loadAllCustomers() {
  //   this.customerService.getAllCustomers().subscribe(response => {
  //     this.customerList = response.dataSet;
  //     console.log(response);
  //   }, error => {
  //     console.log(error);
  //   });a
  // }


  // tslint:disable-next-line:typedef
  loadAllCourses() {
    this.courseService.getAllCourses().subscribe(response => {
          this.courseList = response;
          console.log(response);
        }, error => {
          console.log(error);
        });
  }

}

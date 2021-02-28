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

  loadAllCourses = () => {
    this.courseService.getAllCourses().subscribe(response => {
          this.courseList = response;
        }, error => {
          console.log(error);
        });
  }

}

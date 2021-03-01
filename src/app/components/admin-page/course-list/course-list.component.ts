import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  isShowCoursePanel: boolean;
  coursesList: any;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.isShowCoursePanel = false;
    this.loadAllCourses();
  }
  loadAllCourses = () => {
    this.courseService.getAllCourses().subscribe(response => {
      this.coursesList = response;
    }, error => {
      console.log(error);
    });
  }

  handleOnIsCoursePanelShow = () => {
    this.isShowCoursePanel = !this.isShowCoursePanel;
  }

  deleteCourse = (id) => {
    if (confirm('Are You sure?')) {
      this.courseService.deleteCourse(id).subscribe(() => {
        this.loadAllCourses();
        alert('Deleted!');
      }, error => {
        console.log(error);
      });
    }
  }

  updateCourse = (id: string) => {

  }
}

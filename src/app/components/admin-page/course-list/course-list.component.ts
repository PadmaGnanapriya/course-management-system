import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../services/course.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

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
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.courseService.deleteCourse(id).subscribe(() => this.loadAllCourses());
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your record has been deleted.',
          'success'
        );
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your record is safe :)',
          'error'
        );
      }
    });
  }

  updateCourse = (id: string) => {

  }
}

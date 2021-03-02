import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../../services/Course.service';
import CourseDTO from '../../../dto/CourseDTO';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {LecturerService} from '../../../services/lecturer.service';

@Component({
  selector: 'app-course-register-form',
  templateUrl: './course-register-form.component.html',
  styleUrls: ['./course-register-form.component.css']
})
export class CourseRegisterFormComponent implements OnInit {
  constructor(private courseService: CourseService, private lecturerService: LecturerService) {
  }

  isShowCourseRegistration: boolean;
  lecturers: any;

  ngOnInit(): void {
    this.isShowCourseRegistration = false;
    this.loadAllLecturers();
  }

  handleClearCourse = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = '')
    );
  };
  handleOnIsCourseRegistrationShow = () => {
    this.isShowCourseRegistration = !this.isShowCourseRegistration;
  };

  onSubmit = (value: CourseDTO) => {
    console.log(value);
    this.courseService.addCourse(value).subscribe(resp => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'New record has been saved',
        showConfirmButton: false,
        timer: 1500
      });
      this.handleClearCourse();
    }, error => {
      console.log(error);
    });
  };

  loadAllLecturers = () => {
    this.lecturerService.getAllLecturers().subscribe(response => {
      this.lecturers = response;
    }, error => {
      console.log(error);
    });
  };
}

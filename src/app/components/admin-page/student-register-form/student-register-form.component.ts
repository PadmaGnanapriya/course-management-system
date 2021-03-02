import { Component, OnInit } from '@angular/core';
import StudentDTO from '../../../dto/StudentDTO';
import {StudentService} from '../../../services/student.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-student-register-form',
  templateUrl: './student-register-form.component.html',
  styleUrls: ['./student-register-form.component.css']
})

export class StudentRegisterFormComponent implements OnInit {

  constructor(private studentService: StudentService) { }
  isShowStudentRegistration: boolean;

  ngOnInit(): void {
    this.isShowStudentRegistration = false;
  }

  handleClearStudent = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = '')
    );
  }
  handleOnIsStudentRegistrationShow = () => {
    this.isShowStudentRegistration = !this.isShowStudentRegistration;
  }

  onSubmit = (value: StudentDTO) => {

    this.studentService.addStudent(value).subscribe(resp => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'New record has been saved',
        showConfirmButton: false,
        timer: 1500
      });
      this.handleClearStudent();
    }, error => {
      console.log(error);
    });
  }
}

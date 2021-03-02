import { Component, OnInit } from '@angular/core';
import LecturerDTO from '../../../dto/LecturerDTO';
import {LecturerService} from '../../../services/lecturer.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-lecturer-register-form',
  templateUrl: './lecturer-register-form.component.html',
  styleUrls: ['./lecturer-register-form.component.css']
})
export class LecturerRegisterFormComponent implements OnInit {
  id: string;
  name: string;
  contact: string;
  nic: string;
  email: string;
  birthday: string;
  password: string;

  isShowLecturerRegistration: boolean;

  constructor(private lecturerService: LecturerService) { }

  ngOnInit(): void {
    this.isShowLecturerRegistration = false;
  }

  handleClearLecturer = () => {
    // this.lecturerId = '';

  }
  handleOnIsLecturerRegistrationShow = () => {
    this.isShowLecturerRegistration = !this.isShowLecturerRegistration;
  }

  onSubmit = (value: LecturerDTO) => {

    this.lecturerService.addLecturer(value).subscribe(resp => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'New record has been saved',
        showConfirmButton: false,
        timer: 1500
      });
      this.handleClearLecturer();
    }, error => {
      console.log(error);
    });
  }
}

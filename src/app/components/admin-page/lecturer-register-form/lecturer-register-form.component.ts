import { Component, OnInit } from '@angular/core';
import LecturerDTO from '../../../dto/LecturerDTO';
import {LecturerService} from '../../../services/lecturer.service';

@Component({
  selector: 'app-lecturer-register-form',
  templateUrl: './lecturer-register-form.component.html',
  styleUrls: ['./lecturer-register-form.component.css']
})
export class LecturerRegisterFormComponent implements OnInit {
  lecturerId: string;
  lecturerName: string;
  lecturerContact: string;
  lecturerNic: string;
  lecturerEmail: string;
  lecturerBirthday: string;
  lecturerPassword: string;

  isShowLecturerRegistration: boolean;

  constructor(private lecturerService: LecturerService) { }

  ngOnInit(): void {
    this.isShowLecturerRegistration = false;
  }

  handleClearLecturer = () => {
    this.lecturerId = '';
    this.lecturerName = '';
    this.lecturerContact = '';
    this.lecturerNic = '';
    this.lecturerEmail = '';
    this.lecturerBirthday = '';
    this.lecturerPassword = '';
  }
  handleOnIsLecturerRegistrationShow = () => {
    this.isShowLecturerRegistration = !this.isShowLecturerRegistration;
  }

  saveLecturer = () => {
    const lecturer = new LecturerDTO(
      this.lecturerId,
      this.lecturerName,
      this.lecturerContact,
      this.lecturerNic,
      this.lecturerEmail,
      this.lecturerBirthday,
      this.lecturerPassword,
    );

    this.lecturerService.addLecturer(lecturer).subscribe(resp => {
      alert('Add successful');
      this.handleClearLecturer();
    }, error => {
      console.log(error);
    });
  }


}

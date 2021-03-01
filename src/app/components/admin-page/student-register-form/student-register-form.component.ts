import { Component, OnInit } from '@angular/core';
import StudentDTO from '../../../dto/StudentDTO';
import {StudentService} from '../../../services/student.service';

@Component({
  selector: 'app-student-register-form',
  templateUrl: './student-register-form.component.html',
  styleUrls: ['./student-register-form.component.css']
})
export class StudentRegisterFormComponent implements OnInit {
  studentId: string;
  studentName: string;
  studentContact: string;
  studentNic: string;
  studentEmail: string;
  studentBirthday: string;
  studentPassword: string;

  isShowStudentRegistration: boolean;


  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.isShowStudentRegistration = false;
  }

  saveStudent = () => {
    const student = new StudentDTO(
      this.studentId,
      this.studentName,
      this.studentContact,
      this.studentNic,
      this.studentEmail,
      this.studentBirthday,
      this.studentPassword,
    );

    this.studentService.addStudent(student).subscribe(resp => {
      alert('Add successful');
      this.handleClearStudent();
    }, error => {
      console.log(error);
    });
  }

  handleClearStudent = () => {
    this.studentId = '';
    this.studentName = '';
    this.studentContact = '';
    this.studentNic = '';
    this.studentEmail = '';
    this.studentBirthday = '';
    this.studentPassword = '';
  }

  handleOnIsStudentRegistrationShow = () => {
    this.isShowStudentRegistration = !this.isShowStudentRegistration;
  }
}

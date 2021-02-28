import {Component, OnInit} from '@angular/core';
import StudentDTO from '../../dto/StudentDTO';
import {StudentService} from '../../services/student.service';
import LecturerDTO from '../../dto/LecturerDTO';
import {LecturerService} from '../../services/lecturer.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  lecturerId: string;
  lecturerName: string;
  lecturerContact: string;
  lecturerNic: string;
  lecturerEmail: string;
  lecturerBirthday: string;
  lecturerPassword: string;
  studentId: string;
  studentName: string;
  studentContact: string;
  studentNic: string;
  studentEmail: string;
  studentBirthday: string;
  studentPassword: string;

  constructor(private studentService: StudentService, private lecturerService: LecturerService) {
  }

  ngOnInit(): void {
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
  };

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
  };

  handleClearStudent = () => {
    this.studentId = '';
    this.studentName = '';
    this.studentContact = '';
    this.studentNic = '';
    this.studentEmail = '';
    this.studentBirthday = '';
    this.studentPassword = '';
  };

  handleClearLecturer = () => {
    this.lecturerId = '';
    this.lecturerName = '';
    this.lecturerContact = '';
    this.lecturerNic = '';
    this.lecturerEmail = '';
    this.lecturerBirthday = '';
    this.lecturerPassword = '';
  };
}

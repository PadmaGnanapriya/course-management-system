import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  isShowStudentPanel: boolean;
  studentList: any;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadAllStudents();
    this.isShowStudentPanel = false;
  }
  loadAllStudents = () => {
    this.studentService.getAllStudents().subscribe(response => {
      this.studentList = response;
    }, error => {
      console.log(error);
    });
  }

  deleteStudent = (id: string) => {
    if (confirm('Are You sure?')) {
      this.studentService.deleteStudent(id).subscribe(() => {
        this.loadAllStudents();
        alert('Deleted!');
      }, error => {
        console.log(error);
      });
    }
  }

  updateStudent = (id: string) => {

  }

  handleOnIsStudentPanelShow = () => {
    this.isShowStudentPanel = !this.isShowStudentPanel;
  }
}

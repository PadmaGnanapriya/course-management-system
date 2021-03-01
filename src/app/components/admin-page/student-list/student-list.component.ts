import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../services/student.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

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
        this.studentService.deleteStudent(id).subscribe(() => this.loadAllStudents());
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

  updateStudent = (id: string) => {

  }

  handleOnIsStudentPanelShow = () => {
    this.isShowStudentPanel = !this.isShowStudentPanel;
  }
}

import { Component, OnInit } from '@angular/core';
import {LecturerService} from '../../../services/lecturer.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-lecturer-list',
  templateUrl: './lecturer-list.component.html',
  styleUrls: ['./lecturer-list.component.css']
})
export class LecturerListComponent implements OnInit {
  isShowLecturerPanel: boolean;
  lecturersList: any;

  constructor(private lecturerService: LecturerService) { }

  ngOnInit(): void {
    this.isShowLecturerPanel = false;
    this.loadAllLecturers();
  }
  loadAllLecturers = () => {
    this.lecturerService.getAllLecturers().subscribe(response => {
      this.lecturersList = response;
    }, error => {
      console.log(error);
    });
  }

  handleOnIsLecturerPanelShow = () => {
    this.isShowLecturerPanel = !this.isShowLecturerPanel;
  }

  deleteLecturer = (id: string) => {
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
        this.lecturerService.deleteLecturer(id).subscribe(() => this.loadAllLecturers());
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

  updateLecturer = (id: string) => {

  }
}

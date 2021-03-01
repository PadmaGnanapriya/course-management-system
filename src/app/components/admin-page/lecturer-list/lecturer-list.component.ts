import { Component, OnInit } from '@angular/core';
import {LecturerService} from '../../../services/lecturer.service';

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
    if (confirm('Are You sure?')) {
      this.lecturerService.deleteLecturer(id).subscribe(() => {
        this.loadAllLecturers();
        alert('Deleted!');
      }, error => {
        console.log(error);
      });
    }
  }

  updateLecturer = (id: string) => {

  }
}

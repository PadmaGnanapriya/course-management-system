import {Component, OnInit} from '@angular/core';
import {TimetableService} from '../../services/timetable.service';
import {LecturerService} from '../../services/lecturer.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  timetableList: any;
  lecturersList: any;

  constructor(public timetableService: TimetableService, public lecturerService: LecturerService) {
  }

  ngOnInit(): void {
    this.loadAllTimetable();
  }

  loadAllTimetable = () => {
    this.timetableService.getAllTimetables().subscribe(response => {
      this.timetableList = response;
    }, error => {
      console.log(error);
    });
  }

  loadAllLecturers = () => {
    this.lecturerService.getAllLecturers().subscribe(response => {
      this.lecturersList = response;
    }, error => {
      console.log(error);
    });
  }

}

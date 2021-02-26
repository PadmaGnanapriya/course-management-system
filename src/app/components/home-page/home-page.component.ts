import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  brightness: number;
  notificationList: any;


  constructor() {
  }

  ngOnInit(): void {
    this.notificationList = [
      {title: 'Notification title 1', notificationBody: 'the notification 1'},
      {title: 'Notification title 2', notificationBody: 'the notification 2'},
      {title: 'Notification title 3', notificationBody: 'the notification 3'},
      {title: 'Notification title 4', notificationBody: 'the notification 4'},
    ];
  }

}

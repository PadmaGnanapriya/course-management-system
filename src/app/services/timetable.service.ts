import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import timetableDTO from '../dto/TimetableDTO';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}
  // Create, Read(Get one, Get all), Update, delete

  public addTimetable(timetable: timetableDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/add-timetable', {
      id: timetable.id,
      date: timetable.date,
      time: timetable.time,
    });
  }

  public getTimetable(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '/get-timetable', {headers: {id}});
  }

  public getAllTimetables(): Observable<any> {
    return this.http.get(this.baseUrl + '/get-all-timetables');
  }

  public updateTimetable(timetable: timetableDTO): Observable<any> {
    return this.http.put(this.baseUrl + '/update-timetable',
      {
        id: timetable.id,
        date: timetable.date,
        time: timetable.time,
      });
  }

  public deleteTimetable(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete-timetable',
      {headers: {id}});
  }

}


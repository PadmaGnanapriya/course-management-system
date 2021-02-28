import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import LecturerDTO from '../dto/LecturerDTO';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }
  // Create, Read(Get one, Get all), Update, delete

  public addLecturer(lecturer: LecturerDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/add-lecturer', {
      id: lecturer.id,
      name: lecturer.name,
      contact: lecturer.contact,
      nic: lecturer.nic,
      email: lecturer.email,
      birthday: lecturer.birthday,
      password: lecturer.password,
    });
  }

  public getLecturer(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '/get-lecturer', {headers: {id}});
  }

  public getAllLecturers(): Observable<any> {
    return this.http.get(this.baseUrl + '/get-all-lecturers');
  }

  public updateLecturer(lecturer: LecturerDTO): Observable<any> {
    return this.http.put(this.baseUrl + '/update-lecturer',
      {
        id: lecturer.id,
        name: lecturer.name,
        contact: lecturer.contact,
        nic: lecturer.nic,
        email: lecturer.email,
        birthday: lecturer.birthday,
        password: lecturer.password,
      });
  }

  public deleteLecturer(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete-lecturer',
      {headers: {id}});
  }

}


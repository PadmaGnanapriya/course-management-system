import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import StudentDTO from '../dto/StudentDTO';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {  }
// Create, Read(Get one, Get all), Update, delete

  public addStudent(student: StudentDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/add-student', {
      id: student.id,
      name: student.name,
      contact: student.contact,
      nic: student.nic,
      email: student.email,
      birthday: student.birthday,
      password: student.password,
    });
  }

  public getStudent(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '/get-student', {headers: {id}});
  }

  public getAllStudents(): Observable<any> {
    return this.http.get(this.baseUrl + '/get-all-students');
  }

  public updateStudent(student: StudentDTO): Observable<any> {
    return this.http.put(this.baseUrl + '/update-student',
      {
        id: student.id,
        name: student.name,
        contact: student.contact,
        nic: student.nic,
        email: student.email,
        birthday: student.birthday,
        password: student.password,
      });
  }

  public deleteStudent(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/delete-student/${id}`);
  }
}

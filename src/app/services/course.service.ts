import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import CourseDTO from '../dto/CourseDTO';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}
    // Create, Read(Get one, Get all), Update, delete

  public addCourse(course: CourseDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/add-course', {
      id: course.id,
      lecturer_id: course.lecturerId,
      reference_book: course.referenceBook,
    });
  }

  public getCourse(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '/get-course', {headers: {id}});
  }

  public getAllCourses(): Observable<any> {
    return this.http.get(this.baseUrl + '/get-all-courses');
  }

  public updateCourse(course: CourseDTO): Observable<any> {
    return this.http.put(this.baseUrl + '/update-course',
      {
        id: course.id,
        lecturer_id: course.lecturerId,
        reference_book: course.referenceBook,
      });
  }

  public deleteCourse(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/delete-course/${id}`);
  }

}

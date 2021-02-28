import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import CourseEnrolledDTO from '../dto/CourseEnrolledDTO';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseEnrolledService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}
  // Create, Read(Get one, Get all), Update, delete

  public addCourseEnrolled(courseEnrolled: CourseEnrolledDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/add-courseEnrolled', {
      id: courseEnrolled.id,
      courseId: courseEnrolled.courseId,
      studentId: courseEnrolled.studentId,
    });
  }

  public getCourseEnrolled(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '/get-course-enrolled', {headers: {id}});
  }

  public getAllCourseEnrolleds(): Observable<any> {
    return this.http.get(this.baseUrl + '/get-all-courses-enrolled');
  }

  public updateCourseEnrolled(courseEnrolled: CourseEnrolledDTO): Observable<any> {
    return this.http.put(this.baseUrl + '/update-course-enrolled',
      {
        id: courseEnrolled.id,
        courseId: courseEnrolled.courseId,
        studentId: courseEnrolled.studentId,
      });
  }

  public deleteCourseEnrolled(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete-course-enrolled',
      {headers: {id}});
  }

}

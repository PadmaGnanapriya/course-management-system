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

  public addCourse(course: CourseDTO): Observable<any> {
    return this.http.post(this.baseUrl + '/add-course', {
      id: course.id,
      lecturer_id: course.lecturerId,
      reference_book: course.referenceBook,
    });
  }

  public getAllCourses(): Observable<any> {
    return this.http.get(this.baseUrl + '/get-all-courses');
  }
}

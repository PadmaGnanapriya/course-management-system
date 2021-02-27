import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}
}

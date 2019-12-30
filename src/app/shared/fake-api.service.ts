import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  static URL = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private http: HttpClient) { }

  getTime(): Observable<any> {
    return this.http.get(FakeApiService.URL);
  }
}

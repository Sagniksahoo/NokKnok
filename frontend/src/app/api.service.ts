import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  private baseUrl = "  http://127.0.0.1:5000/"

  getMessage() {
    return this.http.get(`${this.baseUrl}/`);
  }


  addVisitor(visitorData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-visitor`, visitorData);
  }

}

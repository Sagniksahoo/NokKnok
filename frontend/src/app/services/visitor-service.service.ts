import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VisitorServiceService {

  constructor(private http: HttpClient) { }
  
  private baseUrl = "  http://127.0.0.1:5000/"


  addVisitor(visitorData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-visitor`, visitorData);
  }
}

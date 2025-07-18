import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper'
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

 constructor(private http: HttpClient) { }
  
  // private baseUrl = "  http://127.0.0.1:5000/"


  viewAllVisitor(){
    return this.http.get<any[]>(`${baseUrl}/get-all-visitor`)
  }


  deleteVisitor(aadhar: string) {
  return this.http.delete(`${baseUrl}/delete-visitor/${aadhar}`);
}



}

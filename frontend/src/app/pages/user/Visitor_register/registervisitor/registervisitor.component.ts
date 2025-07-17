import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {VisitorServiceService} from '../../../../services/visitor-service.service'
import {  OnInit } from '@angular/core';
@Component({
  selector: 'app-registervisitor',
  templateUrl: './registervisitor.component.html',
  styleUrls: ['./registervisitor.component.css']
})
export class RegistervisitorComponent {

  visitor = {
    name: '',
    email: '',
    dob: '',
    aadhar: ''
  };

  constructor(private visitorService:VisitorServiceService){}


  submitForm() {
    this.visitorService.addVisitor(this.visitor).subscribe(
      res => {
        console.log('Visitor added:', res);
        alert('Visitor successfully registered!');
        this.visitor = { name: '', email: '', dob: '', aadhar: '' }; // Reset form
      },
      err => {
        console.error('Error:', err);
        alert('Error occurred while submitting form.');
      }
    );
  }
}

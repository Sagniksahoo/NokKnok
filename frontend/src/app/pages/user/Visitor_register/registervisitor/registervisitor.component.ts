import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {VisitorServiceService} from '../../../../services/visitor-service.service'
import {  OnInit } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
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
    aadhar: '',
    photo: ''
  };



    // Webcam
  showWebcam = false;
  webcamImage: WebcamImage | null = null;
  private trigger: Subject<void> = new Subject<void>();


  constructor(private visitorService:VisitorServiceService){}

 triggerSnapshot(): void {
    this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.visitor.photo = webcamImage.imageAsBase64;
    this.showWebcam = false;
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  openCamera() {
    this.showWebcam = true;
  }



  submitForm() {
    this.visitorService.addVisitor(this.visitor).subscribe(
      res => {
        console.log('Visitor added:', res);
        alert('Visitor successfully registered!');
        this.visitor = { name: '', email: '', dob: '', aadhar: '', photo: '' };
        this.webcamImage = null;
      },
      err => {
        console.error('Error:', err);
        alert('Error occurred while submitting form.');
      }
    );
  }
}

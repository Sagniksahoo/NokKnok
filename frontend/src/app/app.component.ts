import { Component } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
   message = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getMessage().subscribe((data: any) => {
      this.message = data.message;
    });
  }
}

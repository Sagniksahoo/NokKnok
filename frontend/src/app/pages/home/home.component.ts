import { Component } from '@angular/core';
import { ApiService } from '../../api.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  message = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getMessage().subscribe((data: any) => {
      this.message = data.message;
    });
  }
}

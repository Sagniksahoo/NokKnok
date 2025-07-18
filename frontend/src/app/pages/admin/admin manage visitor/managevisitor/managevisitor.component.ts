import { Component } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
@Component({
  selector: 'app-managevisitor',
  templateUrl: './managevisitor.component.html',
  styleUrls: ['./managevisitor.component.css']
})
export class ManagevisitorComponent {


   visitors: any[] = [];

     constructor(private  AdminService: AdminServiceService) {}


       ngOnInit(): void {
    this.AdminService.viewAllVisitor().subscribe(
      data => {
        this.visitors = data;
      },
      err => {
        console.error('Error fetching visitors:', err);
      }
    );
  }



  deleteVisitor(aadhar: string) {
  if (confirm(`Are you sure you want to delete visitor with Aadhar: ${aadhar}?`)) {
    this.AdminService.deleteVisitor(aadhar).subscribe({
      next: res => {
        alert('Visitor deleted successfully.');
        this.ngOnInit();
      },
      error: err => {
        console.error('Delete failed:', err);
        alert('Error deleting visitor.');
      }
    });
  }
}


}

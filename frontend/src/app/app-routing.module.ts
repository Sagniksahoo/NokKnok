import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistervisitorComponent } from './pages/user/Visitor_register/registervisitor/registervisitor.component';
import { ManagevisitorComponent } from './pages/admin/admin manage visitor/managevisitor/managevisitor.component';

const routes: Routes = [


  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component:HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'register',
    component: RegistervisitorComponent,
    pathMatch: 'full'
  },
  {
    path:'admin-view-user',
    component:ManagevisitorComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

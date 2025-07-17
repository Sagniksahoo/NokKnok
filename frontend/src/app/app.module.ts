import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 









import { AppComponent } from './app.component';
import { ErrorComponent } from './component/error/error.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistervisitorComponent } from './pages/user/Visitor_register/registervisitor/registervisitor.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegistervisitorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

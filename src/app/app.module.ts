import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule , Routes } from '@angular/router';
import {AuthGuard} from './guard/auth.guard';
import { Auth2Guard} from './guard/auth2.guard';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
// import { WebsocketService} from './services/websocket.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { EmailValidators } from './register/email.validators';
import {NgxPaginationModule} from 'ngx-pagination';
import { PhoneNumberValidator } from './register/phoneNo.validators';
import { UsernameValidators } from './register/username.validators';
import { AddComplainComponent } from './add-complain/add-complain.component';
import { ComplainComponent } from './complain/complain.component';
import {FilterPipe } from './filter.pipe';
import {FilterPricePipe} from  './filter.price.pipe';
import { PaymentdoneComponent } from './paymentdone/paymentdone.component';
const appRoute : Routes = [
  { path:'' ,component: HomeComponent},
  { path:'Navbar' ,component: NavbarComponent},
  { path:'Login' ,component: LoginComponent , canActivate: [Auth2Guard] },
  { path:'Register' ,component: RegisterComponent , canActivate: [Auth2Guard] },
  { path:'Profile/:username' ,component: ProfileComponent , canActivate:[AuthGuard]},
  { path:'addComplain' ,component: AddComplainComponent , canActivate:[AuthGuard]},
  { path: 'aboutUs',component: AboutUsComponent},
  { path: 'complain/:id' , component: ComplainComponent},
  {path:'payment/:pid',component: PaymentdoneComponent},

]; 

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    NavbarComponent,
    HomeComponent,
    AddComplainComponent,
    ComplainComponent,
    FilterPipe,
    FilterPricePipe,
    PaymentdoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    FlashMessagesModule,
    AngularFileUploaderModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule

  ],
  providers: [ValidateService,AuthService,AuthGuard,Auth2Guard, FlashMessagesService,EmailValidators,PhoneNumberValidator,UsernameValidators],
  bootstrap: [AppComponent]
})
export class AppModule { }

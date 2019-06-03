import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {  FlashMessagesService } from 'angular2-flash-messages';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { UsernameValidators } from '../register/username.validators';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.styl']
})
export class ProfileComponent implements OnInit {

  user :Object;
  nm;
  name : String;
  complains = [];
  private flag_c = false;
  count = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;
  count5 = 0;
  count6 = 0;
  count7 = 0;
  count8 = 0;
  constructor(private authService : AuthService ,
              private flashMessages : FlashMessagesService ,
              private usernameValidators : UsernameValidators,
              private router : Router,
              private Route: ActivatedRoute) { 

                this.authService.getProfile().subscribe( profile =>{
                 var us = profile.user.username ;
                 this.user = profile.user;
                 console.log(us);
                  this.router.navigate(['/Profile',us]);
                },err=>{
                  console.log(err);
                  return false;
                });
            
 }
 
  form2 = new FormGroup({
    password2: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    password3: new FormControl('', [
        Validators.required,
        Validators.minLength(6)     
      ]
    ),
    });

  ngOnInit() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    this.nm = this.Route.snapshot.paramMap.get('username');
    console.log(this.nm);
    if(this.nm == null){
      this.authService.getProfile().subscribe( profile =>{
        var us = profile.user.username  ;
        this.user = profile.user;
        this.router.navigate(['/Profile',us]);

       },err=>{
         console.log(err);
         return false;
       });
    }
    // console.log("nm: "+ this.nm);

    this.authService.getProfile().subscribe( profile =>{
      this.user = profile.user  ;
      this.name = profile.user.name;
      this.authService.viewMyComplains(this.name).subscribe( res =>{
        // console.log(res.json());
        for(let i=0;i< res.json().length;i++){
          this.complains[i] = {
            complainerName : res.json()[i].complainerName,
            complainName : res.json()[i].complainName,
            type : res.json()[i].type,
            city : res.json()[i].city,
            area : res.json()[i].area,
            time : res.json()[i].time,
            image : null,
            status : res.json()[i].status
          };
          console.log(this.complains[i]);
      }
      });
      // console.log("My Name : " + this.name);
    },err=>{
      console.log(err);
      return false;
    });



  }

  addComplain(){
    this.router.navigate(['/addComplain']);
  }

}

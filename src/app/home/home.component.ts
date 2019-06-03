import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl','./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(    
    private authService : AuthService
  ) {
  }

  complains = [];
  ngOnInit() {
    this.authService.getAllComplains().subscribe( res =>{
      
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
  }



}

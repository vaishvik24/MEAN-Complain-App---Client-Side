import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl','./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(    
    private authService : AuthService,
    private Route:  ActivatedRoute,
    private router : Router,


  ) {
    for(let i=0;i<100;i++){
      this.pagination.push('angular '+i);
    }
    this.Route.queryParamMap.subscribe(params=>{
      this.category = params.get('category');
    });
  
    this.authService.getAllComplains()
                    .subscribe(response =>{
                        this.Route.queryParamMap.subscribe(params=>{  
                        this.category = params.get('category');
                        this.filter_product = [];
                        this.filter_product  = (this.category) ? 
                          this.complains.filter(p => p.type === this.category) :
                          this.complains;
                      });
    });
  }
  category = "";
  filter_product = [];
  private cat_main = ["Water","Road","Health","Other"];
  private pagination = [];
  numberObject = Object;
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
      }
    });
    this.authService.getNumberComplain().subscribe( res =>{
      // console.log(res.json());
      this.numberObject = res.json();
    });
  }

  allProducts(){
    this.filter_product = this.complains;
    this.router.navigate(['/']);
  }

}

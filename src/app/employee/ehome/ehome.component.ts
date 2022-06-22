import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ehome',
  templateUrl: './ehome.component.html',
  styleUrls: ['./ehome.component.css']
})
export class EhomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    let role = localStorage.getItem('role')
    if (role !== "employee" ){
      this.router.navigate(["/"]);
    }

    this.getURL();
  }

  public getURL():void{

    var user_url;
    var user_name;
    user_url= localStorage.getItem('user_url');
    user_name= localStorage.getItem('user_name');


  }

}

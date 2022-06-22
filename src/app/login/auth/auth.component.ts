import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { GoogleLoginProvider, SocialAuthService, SocialUser, SocialAuthServiceConfig } from 'angularx-social-login';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService:SocialAuthService, private router:Router,private http:HttpClient) { }

  loggedInUser : any;

  ngOnInit(): void {
     this.authService.authState.subscribe((user)=>{

      localStorage.setItem('user_url',user.photoUrl)
      localStorage.setItem('user_name',user.name)
      localStorage.setItem('user_email',user.email)
      localStorage.setItem('time', Date.now().toString())
    })
  }

  signIn():void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user)=>{
      this.http.get(`http://localhost:8080/recruiter/isRecruiter?email=${user.email}`).subscribe((result)=>{
        if (result){
        localStorage.setItem('role',"recruiter")
          this.router.navigate(['/recruiter/jobposting'])
      }else {
        localStorage.setItem('role',"employee")
          this.router.navigate(['employee/jobposting'])
      }
      })

    });
  }

}

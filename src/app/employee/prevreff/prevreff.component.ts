import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/candidate.service';


@Component({
  selector: 'app-prevreff',
  templateUrl: './prevreff.component.html',
  styleUrls: ['./prevreff.component.css']
})
export class PrevreffComponent implements OnInit {

  referral=[]
  constructor(private candidateservice?:CandidateService) {

   }

  ngOnInit(): void {
    this.candidateservice.getrecentreferral().subscribe(data=>{
      console.log(data)
      this.referral=data;
    })
  }

}

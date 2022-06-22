import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/candidate.service';

@Component({
  selector: 'app-r-refferals',
  templateUrl: './r-refferals.component.html',
  styleUrls: ['./r-refferals.component.css']
})
export class RRefferalsComponent implements OnInit {

  referral=[]
  constructor(private candidateservice?:CandidateService) { }

  ngOnInit(): void {
    this.candidateservice.getrecentreferral().subscribe(data=>{
      console.log(data)
      this.referral=data;
    })
  }

}

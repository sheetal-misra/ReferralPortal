import { Component, OnInit } from '@angular/core';
import { ReferralService } from '../../referral.service';
@Component({
  selector: 'app-lb',
  templateUrl: './lb.component.html',
  styleUrls: ['./lb.component.css']
})
export class LbComponent implements OnInit {
  referrals:any;
  constructor(private data:ReferralService) {
        this.data.leaderboard().subscribe((data)=>{
          this.referrals = data;
        })
   }
  ngOnInit(): void {
  }
}

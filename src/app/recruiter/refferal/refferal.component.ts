import { Component, OnInit } from '@angular/core';
import { Referrals } from '../../referrals';
import { ReferralService } from '../../referral.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-refferal',
  templateUrl: './refferal.component.html',
  styleUrls: ['./refferal.component.css']
})
export class RefferalComponent implements OnInit {
  fileUploadUrl="http://localhost:8080/referral-list"

  refferals: Referrals[];
  jpost: Referrals = new Referrals();
  resume: File;
  pdf:any;
  id: string;
  constructor(private _http:HttpClient,private referralService: ReferralService,private router: Router) {
    
   }

  ngOnInit(): void {
    this.getreferrals();
  }

  private getreferrals(){
    this.referralService.referrals().subscribe(data => {
      this.refferals= data;
    });
  }

  onClickDownloadPdf(id) {
      console.log(id);
        this.referralService.downloadFile(id).subscribe({
          next: (data: any) => {
            this.onClickdownloadresume(id);
          
          },
          error: (err: any) => {
            console.log(err);
          }
        });
      }

  onClickdownloadresume(fileName: string){
    const linkSource = `data:application/pdf;base64,${this.pdf}`;
      const downloadLink = document.createElement('a');
      downloadLink.href = fileName;
      downloadLink.download = "Referral PORTAL (1).pdf";
      downloadLink.click();
  }

//   onClickDownloadPdf() {
      
//     this.referralService.getApplicationByReferId(this.id).subscribe({
//       next: (data: any) => {
//         this.downloadPDF(data['resume'], data['firstName']);
      
//       },
//       error: (err: any) => {
//         console.log(err);
//       }
//     });
// }

// downloadPDF(pdf, fileName) {
//     const linkSource = `data:application/pdf;base64,${pdf}`;
//     const downloadLink = document.createElement('a');
//     downloadLink.href = linkSource;
//     downloadLink.download = fileName;
//     downloadLink.click();
//   }


  downLoadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type});
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
        alert( 'Please disable your Pop-up blocker and try again.');
    }
}

onClickAccepted(referid:number){
  this.referralService.acceptStatus(referid).subscribe(data => {
    console.log("successful");
  });
}

onClickRejected(referid:number){
  this.referralService.rejectStatus(referid).subscribe(data => {
    console.log("successful");
  });
  this.getreferrals();
}

exit() {
  window.location.reload();
}

}

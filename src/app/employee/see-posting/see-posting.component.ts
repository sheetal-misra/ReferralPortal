import { Component, OnInit } from '@angular/core';
import { Job } from '../../job';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JobService } from '../../job.service';
import { FormGroup,NgForm } from '@angular/forms';
import { CandidateService } from '../../candidate.service';
import { candidate } from '../../candidate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-see-posting',
  templateUrl: './see-posting.component.html',
  styleUrls: ['./see-posting.component.css']
})
export class SeePostingComponent implements OnInit {
  file: any;
  [x: string]: any;
  jobid: any;
  emp:any;
  openform = false;
  uploaded = false;
  candidate: candidate = new candidate();
  openresumeform=false;
  myForm:FormGroup;
  filename: object;
  closeResult = '';
  displayStyle = "none";
  displayStyle1 = "none";
  displayStyle2 = "none";

  public jobs: Job[] = [];

  constructor(private jobService: JobService,private router: Router,private _http:HttpClient,private candidateService: CandidateService) { }

  ngOnInit() {
    this.getJobs();
  }

  public searchJobs(key: string): void {
    console.log(key);
    const results: Job[] = [];
    for (const job of this.jobs) {
      if (
        job.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||job.requirements.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||job.location.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||job.description.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||job.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(job);
      }
    }
    this.jobs = results;
    if (results.length === 0 || !key) {
      this.openPopup2();
      
    }
  }
  
  public getJobs(): void {
    this.emp= window.localStorage.getItem("user_name");
    this.jobService.getJobs().subscribe(
      (response: Job[]) => {
        console.log(response);
        this.jobs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  saveCandidate(){
    this.candidateService.createCandidate(this.candidate).subscribe( data =>{
      console.log(data);
      this.goToCandidate();
    },
    error => console.log(error));
  }
  public onOpenModal(mode: string, job?: Job): void {
    const container = document.getElementById('mycontainer');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addJobModal');
    }
    if (mode === 'csv') {
      button.setAttribute('data-target', '#addCSVModal');
    }
    container!.appendChild(button);
    button.click();
  }
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    
  }
  openPopup1() {
    this.displayStyle1 = "block";
  }
  closePopup1() {
    window.location.reload();
    this.displayStyle1 = "none";
  }

  saveResume(){
    this.candidateService.uploadresume(this.file).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }


  goToCandidate(){
    this.router.navigate(['FileDb']);
    
  }

  fileChange(event: any) {
    // Instantiate an object to read the file content
    let reader = new FileReader();
    // when the load event is fired and the file not empty
    if(event.target.files && event.target.files.length > 0) {
      // Fill file variable with the file content
      this.file = event.target.files[0];
    }
  }

  

  // Upload the file to the API
  upload() {
    this.emp= window.localStorage.getItem("user_name");
    // Instantiate a FormData to store form fields and encode the file
    let body = new FormData();this.uploaded = true;
    // Add file content to prepare the request
    body.append("file", this.file);
    // Launch post request
    this._http.post('http://localhost:8080/upload', body)
    .subscribe(
      // Admire results
      (data) => {this.filename=data;console.log(data)},
      // Or errors :-(
      error => console.log(error),
      // tell us if it's finished
      () => { console.log("completed") }
    );
  }

  

  
  
  onSubmit(){
    this.emp= window.localStorage.getItem("user_name");
    console.log(this.candidate);
    this.saveCandidate();
  }

  onSubmitresume(){
    console.log(this.candidate);
    this.saveResume();
  }

  onClickOpenForm(){
    this.openform=true;
    return this.openform;
    }

    
  onClickOpenresumeForm(){
      this.openresumeform=true;
      return this.openresumeform;
      }

    onclickgetjobid(jobid){
      this.jobid=jobid;
      return this.jobid;
    }
    onclickgetemp(){
      this.emp= window.localStorage.getItem("user_name");
      return this.emp;
    }
    openPopup2() {
      this.displayStyle2 = "block";
    }
    closePopup2() {
      window.location.reload();
      this.displayStyle2 = "none";
    
    }

}


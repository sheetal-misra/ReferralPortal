import { Component, OnInit } from '@angular/core';
import { Job } from '../../job';
import { HttpErrorResponse } from '@angular/common/http';
import { JobService } from '../../job.service';
import { FileUploadService } from '../../file-upload.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.css']
})
export class JobPostingComponent implements OnInit {

  [x: string]: any;
  
  displayStyle1 = "none";
  displayStyle2 = "none";
  displayStyle3 = "none";
  displayStyle4 = "none";

  public jobs: Job[] = [];
  public editJob: Job | undefined ;
  public deleteJob: Job | undefined ;
  public file: File | undefined;

  constructor(private jobService : JobService, private fileUploadService : FileUploadService) { }

  ngOnInit(){
    this.getJobs();
  }

  public getJobs(): void{
    this.jobService.getJobs().subscribe(
      (response: Job[]) => {
        this.jobs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddJob(addForm: NgForm): void {
    document.getElementById('add-job-form')!.click();
    this.jobService.addJob(addForm.value).subscribe(
      (response: Job) => {
        console.log(response);
        this.getJobs();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateJob(job: Job): void {
    this.jobService.updateJob(job).subscribe(
      (response: Job) => {
        console.log(response);
        this.getJobs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteJob(jobId: number): void {
    this.jobService.deleteJob(jobId).subscribe(
      (response: void) => {
        console.log(response);
        this.getJobs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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
      this.openPopup4();

    }
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
    if (mode === 'edit') {
      this.editJob=job;
      button.setAttribute('data-target', '#updateJobModal');
    }
    if (mode === 'delete') {
      this.deleteJob=job;
      button.setAttribute('data-target', '#deleteJobModal');
    }
    container!.appendChild(button);
    button.click();
  }

  onChange(event : any) {
    this.file = event.target.files[0];
}

public  onUpload() {
console.log(this.file);
this.fileUploadService.upload(this.file).subscribe(
  (event: any) => {
    console.log(event)
    // alert(event.message)
    this.getJobs();
  }
);
}

openPopup1() {
  this.displayStyle1 = "block";
}
closePopup1() {
  window.location.reload();
  this.displayStyle1 = "none";

}

openPopup2() {
  this.displayStyle2 = "block";
}
closePopup2() {
  window.location.reload();
  this.displayStyle2 = "none";

}

openPopup3() {
  this.displayStyle3 = "block";
}
closePopup3() {
  window.location.reload();
  this.displayStyle3 = "none";

}
openPopup4() {
  this.displayStyle4 = "block";
}
closePopup4() {
  window.location.reload();
  this.displayStyle4 = "none";

}
}

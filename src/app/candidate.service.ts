import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { candidate } from './candidate';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private baseUrl = 'http://localhost:8080/uploaddetails';
  constructor(private http: HttpClient) { }

  getrecentreferral():Observable <any>
  {
    return this.http.get('http://localhost:8080/referral-list')
  }

  createCandidate(candidate: candidate) {
    console.log(candidate);
    let FileDb = candidate;
    return this.http.post(`${this.baseUrl}`,FileDb)
  }

  uploadresume(file: File) {
    return this.http.post('http://localhost:8080/upload',file)
  }

  public addRefer(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}`, formData, { responseType: 'text' });
  }
}

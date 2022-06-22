import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Referrals } from './referrals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferralService {

  private apiServerUrl = "http://localhost:8080/referral-list";

  constructor(private http: HttpClient) {

  }
  referrals(): Observable<Referrals[]>{
    return this.http.get<Referrals[]>(`${this.apiServerUrl}`);

  }
  leaderboard() {
    return this.http.get(`http://localhost:8080/getTopReferrers`);
  }
  public downloadFile(id: string) {
    return this.http.get(`http://localhost:8000/files/${id}`);
  }
  updateStage(id: number) {
    return this.http.put(`${this.apiServerUrl}/referral/updateapproval/${id}`, { observe: 'response', responseType: 'blob' });
  }

  onReject(id: number) {
    return this.http.delete(`${this.apiServerUrl}/referral/delete/${id}`, { observe: 'response', responseType: 'blob' });
  }
  public addRefer(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/user/referCandidate`, formData, { responseType: 'text' });
  }

  public acceptStatus(id:number) {
    return this.http.put<any>(`http://localhost:8080/acceptcandidate/${id}`,{ observe: 'response', responseType: 'blob' });

}

public rejectStatus(id:number) {
  return this.http.put<any>(`http://localhost:8080/rejectcandidate/${id}`,{ observe: 'response', responseType: 'blob' });

}

}

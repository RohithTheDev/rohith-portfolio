import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmailRequest {
  name: string;
  email: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // ✅ MUST match Vercel Express route
  private apiUrl = '/api/server/send-email';

  constructor(private http: HttpClient) {}

  sendEmail(data: EmailRequest): Observable<EmailResponse> {
    return this.http.post<EmailResponse>(this.apiUrl, data);
  }
}

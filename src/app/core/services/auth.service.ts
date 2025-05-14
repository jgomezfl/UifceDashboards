import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/LoginResponse.model';
import { LoginCredentials } from '../models/LoginCredentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/api/login';

  constructor(private http: HttpClient) { }

  login(credentials: LoginCredentials): Observable<LoginResponse> {
    // var loginUrl = this.apiUrl + "/api/login";
    return this.http.post<LoginResponse>(this.apiUrl, {
      email: credentials.email,
      password: credentials.password
    });
  }

  logout(): void{
    localStorage.removeItem('token');
  }

  userVerify(response: LoginResponse): boolean{
    let email = response.user.email;

    if(email.split("@")[0] === "jgomezfl"){
      localStorage.setItem('token', response.token);
      return true;
    }
    return false;
  }

  isTokenExpired(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return true;

    const payload = this.getTokenPayload(token);
    if (!payload || !payload.exp) return true;

    const now = Math.floor(Date.now() / 1000); // en segundos
    return payload.exp < now;
  }

  private getTokenPayload(token: string): any {
    try {
      const payloadBase64 = token.split('.')[1];
      const payloadJson = atob(payloadBase64);
      return JSON.parse(payloadJson);
    } catch (e) {
      return null;
    }
  }

}

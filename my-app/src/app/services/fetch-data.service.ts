import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from './auth-response';
@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private httpClient: HttpClient) {}

  signUp(data: Object) {
    return this.httpClient
      .post<AuthResponse>(
        'https://your-fate-back-end.herokuapp.com/api/users/signup',
        data
      )
      .subscribe((res) => {
        console.log(res);
        this.setSession(res);
      });
  }

  signIn(data: Object) {
    return this.httpClient
      .post<AuthResponse>(
        'https://your-fate-back-end.herokuapp.com/api/users/signin',
        data
      )
      .subscribe((res) => {
        console.log(res);
        this.setSession(res);
      });
  }

  private setSession(authResult: AuthResponse) {
    localStorage.setItem('token', authResult.token);
  }

  logout() {
    localStorage.removeItem('token');
  }
}

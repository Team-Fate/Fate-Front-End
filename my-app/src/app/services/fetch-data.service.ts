import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResponse } from './auth-response';
@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private httpClient: HttpClient) {}

  apiUrl = 'https://your-fate-back-end.herokuapp.com/api/';

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

  getHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `bearer ${localStorage['token']}`,
    });

    return { headers: headers };
  }

  getCharacterById(id: any) {
    return this.httpClient.get(
      this.apiUrl + 'characters/' + id,
      this.getHeaders()
    );
  }

  getCharacters() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `bearer ${localStorage['token']}`,
    });

    const requestOptions = { headers: headers };

    this.httpClient
      .get(
        'https://your-fate-back-end.herokuapp.com/api/characters',
        requestOptions
      )
      .subscribe((res: any) => {});
  }
  getCardById(id: any) {
    return this.httpClient.get(this.apiUrl + 'cards/' + id, this.getHeaders());
  }

  createCharacter(data: any) {
    return this.httpClient.post(
      this.apiUrl + 'characters',
      data,
      this.getHeaders()
    );
  }
  getCharacterActions(id: any) {
    return this.httpClient.get(
      this.apiUrl + 'characters/' + id + '/actions',
      this.getHeaders()
    );
  }
  getActionById(id: any) {
    return this.httpClient.get(
      this.apiUrl + 'actions/' + id,
      this.getHeaders()
    );
  }
  getNpcById(id: any) {
    return this.httpClient.get(this.apiUrl + 'npcs/' + id, this.getHeaders());
  }
}

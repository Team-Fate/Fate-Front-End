import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private httpClient: HttpClient) {}

  signUp(data: Object) {
    return this.httpClient
      .post('https://your-fate-back-end.herokuapp.com/api/users/signup', data)
      .subscribe((res) => {
        console.log(res);
      });
  }
}

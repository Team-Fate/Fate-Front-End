import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let FetchDataService = class FetchDataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    signUp(data) {
        return this.httpClient
            .post('https://your-fate-back-end.herokuapp.com/api/users/signup', data)
            .subscribe((res) => {
            console.log(res);
            this.setSession(res);
        });
    }
    signIn(data) {
        return this.httpClient
            .post('https://your-fate-back-end.herokuapp.com/api/users/signin', data)
            .subscribe((res) => {
            console.log(res);
            this.setSession(res);
        });
    }
    setSession(authResult) {
        localStorage.setItem('token', authResult.token);
    }
    logout() {
        localStorage.removeItem('token');
    }
};
FetchDataService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], FetchDataService);
export { FetchDataService };
//# sourceMappingURL=fetch-data.service.js.map
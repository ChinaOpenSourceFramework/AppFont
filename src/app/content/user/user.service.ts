import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private heroesUrl = 'http://127.0.0.1:8080/system/user';  // URL to web api

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getUserInfoByLoginName(loginName: String): Promise<any> {
    return this.http
      .get(this.heroesUrl + '/findUserByLoginName?loginName=' + loginName, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as String)
      .catch(this.handleError);
  }

  getAllUser(): Promise<any> {
    return this.http
      .get(this.heroesUrl + '/findAllUser', {headers: this.headers})
      .toPromise()
      .then(res => res.json() as String)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

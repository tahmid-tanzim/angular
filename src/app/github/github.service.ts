import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GithubService {

  constructor(private http: Http) {
  }

  getUsers(param): Observable<any> {
    const url = `http://api.github.com/search/users?q=${param}`;
    return this.http.get(url).map(res => res.json());
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GithubService {

  constructor(private http: Http) {
  }

  userDetails(id): Observable<any> {
    const url = `https://api.github.com/users/${id}`;
    return this.http.get(url).map(res => res.json());
  }

  getUsers(param, page): Observable<any> {
    const url = `https://api.github.com/search/users?q=${param}&page=${page}&per_page=50`;
    return this.http.get(url).map(res => res.json());
  }
}

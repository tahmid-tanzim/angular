import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GithubService } from '../github/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubService]
})
export class SearchComponent implements OnInit {

  public param;
  public users;
  public pages:number[] = [];
  public page = 1;

  constructor(private router:Router, private githubService:GithubService) {
  }

  ngOnInit() {
  }

  onKeyup(e) {
    this.param = e.target.value;
  }

  detailsUser(u) {
    this.router.navigate(['user', u.login]);
  }

  getUsers(page = 1) {
    this.page = page;
    this.githubService.getUsers(this.param, page).subscribe(res => {
      const {total_count} = res;
      this.users = res;

      /* Pagination */
      const page_count = Math.ceil(total_count / 50);
      this.pages = [];

      for (let i = 1; i <= page_count; i++) {
        this.pages.push(i);
      }
    });
  }

}

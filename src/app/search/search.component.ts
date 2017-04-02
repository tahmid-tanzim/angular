import { Component, OnInit } from '@angular/core';
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
  constructor(private githubService: GithubService) { }

  ngOnInit() {
  }

  onKeyup(e) {
    this.param = e.target.value;
  }

  getUsers() {
    this.githubService.getUsers(this.param).subscribe(res => {
      //const {total_count, items} = res;
      this.users = res;
      console.log(this.users);
    });
  }

}

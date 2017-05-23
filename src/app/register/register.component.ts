import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public title = 'Loading...';
  constructor() { }

  ngOnInit() {
    this.title = 'New Job Openings';
  }

  onSubmit(jobOpening) {
    console.log(jobOpening);
  }

}

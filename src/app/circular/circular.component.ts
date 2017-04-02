import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  public title = 'Loading...';
  constructor() { }

  ngOnInit() {
    this.title = 'New Job Openings';
  }

  changeTitle() {
    this.title = 'Sorry! N/A';
  }

}

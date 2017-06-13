import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  onCreateAccount(name: string, status: string) {
    this.accountAdded.emit({name, status});
    console.log('A server status changed, new status: ', status);
  }

  constructor() {
  }

}

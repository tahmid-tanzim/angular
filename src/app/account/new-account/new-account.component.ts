import {Component, EventEmitter, Output} from '@angular/core';
import {LoggingService} from '../../service/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  onCreateAccount(name: string, status: string) {
    this.accountAdded.emit({name, status});

    const service = new LoggingService();
    service.logStatusChanged(status);
  }

  constructor() {
  }

}

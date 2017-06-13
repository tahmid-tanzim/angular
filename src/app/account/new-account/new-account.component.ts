import {Component, EventEmitter, Output} from '@angular/core';
import {LoggingService} from '../../service/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(private loggingService: LoggingService) {
  }

  onCreateAccount(name: string, status: string) {
    this.accountAdded.emit({name, status});
    this.loggingService.logStatusChanged(status);
  }

}

import {Component} from '@angular/core';
import {LoggingService} from '../../service/logging.service';
import {AccountService} from '../../service/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountService: AccountService) {
  }

  onCreateAccount(name: string, status: string) {
    this.accountService.addAccount(name, status);
    this.loggingService.logStatusChanged(status);
  }

}

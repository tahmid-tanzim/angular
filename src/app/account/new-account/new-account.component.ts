import {Component} from '@angular/core';
import {AccountService} from '../../service/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private accountService: AccountService) {
  }

  onCreateAccount(name: string, status: string) {
    this.accountService.addAccount(name, status);
  }

}

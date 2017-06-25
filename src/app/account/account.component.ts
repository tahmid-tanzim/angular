import {Component, OnInit} from '@angular/core';
import {AccountService} from '../service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [AccountService]
})
export class AccountComponent implements OnInit {
  accounts: { name: string, status: string }[] = [];

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

  onAccountAdded(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: { id: number, status: string }) {
    this.accounts[updateInfo.id].status = updateInfo.status;
  }

}

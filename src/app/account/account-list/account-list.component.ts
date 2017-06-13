import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoggingService} from '../../service/logging.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{ id: number, status: string }>();

  constructor() {
  }

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, status});

    const service = new LoggingService();
    service.logStatusChanged(status);
  }

}

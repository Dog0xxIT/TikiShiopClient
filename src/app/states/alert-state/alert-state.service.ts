import { Injectable } from '@angular/core';
import { AlertState } from './alert-state.service.interface';
import { AlertModel } from './alert-model';

@Injectable({
  providedIn: 'root'
})
export class AlertStateService implements AlertState {
  alerts: AlertModel[] = [];

  constructor() {}

  addAlert(alert: AlertModel): void {
    this.alerts.push(alert);

    // Set a timeout to remove the alert after 10 seconds
    setTimeout(() => {
      this.removeAlert(alert);
    }, 10000);
  }

  private removeAlert(alert: AlertModel): void {
    this.alerts = this.alerts.filter(a => a !== alert);
  }
}

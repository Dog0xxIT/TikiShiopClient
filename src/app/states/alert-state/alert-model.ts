import {AlertType} from '../../components/alert/alert.enum';

export class AlertModel {
  public message: string;
  public type: AlertType;
  public icon: string;

  constructor(message: string, type: AlertType, icon: string) {
    this.message = message;
    this.type = type;
    this.icon = icon;
  }
}

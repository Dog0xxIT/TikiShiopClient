import {AlertModel} from './alert-model';

export interface AlertState {
  alerts : Array<AlertModel>;
  addAlert (alert: AlertModel) : void;
}

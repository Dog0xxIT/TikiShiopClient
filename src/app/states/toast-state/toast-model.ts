import {ToastType} from '../../components/stack-toast/toast-type';

export class Toast {
  public id: number;
  public message: string;
  public type: ToastType;

  constructor(id: number, message: string, type: ToastType) {
    this.id = id;
    this.message = message;
    this.type = type;
  }
}

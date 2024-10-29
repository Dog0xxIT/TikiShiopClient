// toast.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Toast } from "./toast-model";
import {ToastType} from '../../components/stack-toast/toast-type';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  public toasts$ = this.toastsSubject.asObservable();
  private counter = 0;

  public show(type: ToastType, message: string, duration: number = 5000) {
    const toast =  new Toast(this.counter ++, message, type);
    this.toastsSubject.next([...this.toastsSubject.value, toast]);
    setTimeout(() => this.dismiss(toast.id), duration);
  }

  public dismiss(id: number) {
    this.toastsSubject.next(this.toastsSubject.value.filter(toast => toast.id !== id));
    this.counter -= 1;
  }
}

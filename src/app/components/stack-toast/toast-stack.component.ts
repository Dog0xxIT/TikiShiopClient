import {Component, OnInit} from '@angular/core';
import {Toast} from '../../states/toast-state/toast-model';
import {ToastService} from '../../states/toast-state/toast.service';
import {ToastType} from './toast-type';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-stack-toast',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './toast-stack.component.html',
})
export class ToastStackComponent implements OnInit {
  protected toasts: Toast[] = [];

  constructor(private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.toastService.toasts$.subscribe(toasts => {
      this.toasts = toasts;
    });
  }

  getToastClasses(type: ToastType): string {

    let classCss = "inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg ";
    switch (type) {
      case ToastType.Info:
        classCss += 'text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200';
        break;
      case ToastType.Danger:
        classCss += 'text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200';
        break;
      case ToastType.Success:
        classCss += 'text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200';
        break;
      case ToastType.Warning:
        classCss += 'text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200';
        break;
      default:
        classCss += 'text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200';
    }
    return classCss;
  }

  dismiss(id: number) {
    this.toastService.dismiss(id);
  }
}

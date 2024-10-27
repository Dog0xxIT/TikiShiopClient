import {Component, Input} from '@angular/core';
import {AlertType} from './alert.enum';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  templateUrl: './alert.component.html',
  imports: [
    NgClass
  ]
})
export class AlertComponent {
  @Input() type: AlertType;
  @Input() text: string;

  getAlertClasses(): string {
    switch (this.type) {
      case AlertType.Info:
        return 'flex items-center p-4 mb-4 text-blue-800 bg-blue-50 rounded-lg dark:bg-gray-800 dark:text-blue-400';
      case AlertType.Danger:
        return 'flex items-center p-4 mb-4 text-red-800 bg-red-50 rounded-lg dark:bg-gray-800 dark:text-red-400';
      case AlertType.Success:
        return 'flex items-center p-4 mb-4 text-green-800 bg-green-50 rounded-lg dark:bg-gray-800 dark:text-green-400';
      case AlertType.Warning:
        return 'flex items-center p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg dark:bg-gray-800 dark:text-yellow-300';
      default:
        return 'flex items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800';
    }
  }

  closeAlert() {
    // Xử lý đóng cảnh báo tại đây, ví dụ: ẩn phần tử hoặc kích hoạt sự kiện
  }
}

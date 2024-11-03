import {Component, Input} from '@angular/core';
import {BreadcrumbItem} from './breadcum-item';

@Component({
  imports: [],
  selector: 'app-breadcrumbs',
  standalone: true,
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent {
  @Input() public items: BreadcrumbItem[];
}

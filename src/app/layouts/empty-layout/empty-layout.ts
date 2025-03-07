import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-empty-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: "./empty-layout.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyLayout { }

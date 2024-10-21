import { FooterComponent } from './../../components/footer/footer.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.html',
  standalone: true,
  imports: [
    NavbarComponent, FooterComponent, RouterOutlet, RouterLink
  ],
})

export class MainLayout {

}

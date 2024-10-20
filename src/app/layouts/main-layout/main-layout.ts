import { FooterComponent } from './../../components/footer/footer.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.html',
  standalone: true,
  imports: [
    NavbarComponent, FooterComponent
  ],
})

export class MainLayout {

}

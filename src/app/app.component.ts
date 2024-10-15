import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WelcomeBoxComponent } from "./welcome-box/welcome-box.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarButtonsComponent } from "./navbar-buttons/navbar-buttons.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WelcomeBoxComponent, FooterComponent, NavbarButtonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Zan_Kaligaro_Angular';
}

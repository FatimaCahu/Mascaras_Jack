import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'mj-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, AboutComponent, GalleryComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}

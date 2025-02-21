import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, MascotaComponent, FooterComponent],
  template: `
    <div class="" id="container">
      <app-nav id="nav" class="bg-blue-900"></app-nav>

      <app-mascota id="mascota-content" class="bg-red-900"></app-mascota>

      <app-footer id="footer" class="bg-green-900"></app-footer>
    </div>

    <router-outlet />
  `,
  styles: [
    `
      #container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr 8fr 2fr;
        min-height: 100vh;
        grid-template-areas:
          'nav nav nav'
          'mascota mascota mascota'
          'footer footer footer';
      }
      #nav {
        grid-area: nav;
      }
      #mascota-content {
        grid-area: mascota;
      }
      #footer {
        grid-area: footer;
      }
    `,
  ],
})
export class AppComponent {
  title = 'mascotas-app';
}

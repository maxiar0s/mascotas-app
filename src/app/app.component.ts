import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { FooterComponent } from './components/footer/footer.component';
import { MascotaService } from './services/mascota.service';
import { MascotaInterface } from './interfaces/mascota-interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, MascotaComponent, FooterComponent],
  template: `
    <div class="" id="">
      <app-nav id="nav" class=""></app-nav>

      <app-mascota
        id="mascota-content"
        class="flex justify-center"
        [mascotas]="mascotas"
      ></app-mascota>

      <app-footer id="footer" class=""></app-footer>
    </div>

    <router-outlet />
  `,
  styles: [``],
})
export class AppComponent {
  mascotas: MascotaInterface[] = [];
  constructor(private mascotaService: MascotaService) {
    this.mascotas = this.mascotaService.getAllMascotas();
  }
}

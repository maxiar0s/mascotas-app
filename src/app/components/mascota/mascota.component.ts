import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mascota',
  imports: [],
  template: `
    <div
      class="grid place-content-center gap-2 grid-cols-2 w-11/12 mb-1 mt-1 md:grid-cols-3 md:w-5/6 md:gap-2 lg:grid-cols-4 lg:w-10/12 lg:gap-3 "
    >
      @for(mascota of mascotas; track mascota.image){
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="{{ mascota.image }}"
          alt="{{ mascota.name }}"
        />
      </div>
      }
    </div>
  `,
  styles: ``,
})
export class MascotaComponent {
  @Input() mascotas: any[] = [];
}

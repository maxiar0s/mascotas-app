import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mascota',
  imports: [],
  template: `
    <div
      class="grid place-content-center gap-2 grid-cols-2 w-11/12 mb-1 mt-1 md:grid-cols-3 md:w-5/6 md:gap-2 lg:grid-cols-4 lg:w-10/12 lg:gap-3 "
    >
      @for(mascota of mascotas; track mascota.id){
      <div class="rounded-lg shadow-xl" id="containerMascotas">
        <img
          class="rounded-t-lg"
          src="{{ mascota.image }}"
          alt="{{ mascota.name }}"
        />
        <p class="text-center text-m font-semibold p-2 pb-0">
          {{ mascota.name }} - {{ mascota.age }} años
        </p>
        <p class="text-center text-s p-2">{{ mascota.description }}</p>
      </div>
      }
    </div>
  `,
  styles: `#containerMascotas {
    background: #142342d6;
  }`,
})
export class MascotaComponent {
  @Input() mascotas: any[] = [];
}

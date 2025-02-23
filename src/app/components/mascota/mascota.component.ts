import { Component, Input } from '@angular/core';
import { MascotaInterface } from '../../interfaces/mascota-interface';

@Component({
  selector: 'app-mascota',
  imports: [],
  template: `
    <div
      class="grid place-content-center gap-2 grid-cols-2 w-11/12 mb-1 mt-1 md:grid-cols-3 md:w-5/6 md:gap-3 lg:grid-cols-4 lg:w-10/12 lg:gap-4 "
    >
      @for(mascota of mascotas; track mascota.id){
      <div
        class="grid rounded-lg shadow-xl shadow-gray-950"
        id="containerMascotas"
      >
        <img
          class="rounded-t-lg"
          src="{{ mascota.image }}"
          alt="{{ mascota.name }}"
        />
        <p class="text-center text-l font-semibold p-2 pb-0">
          {{ mascota.name }}
        </p>
        <p class="text-center text-s p-2 pb-0 pt-0 font-light text-gray-300">
          {{ mascota.description }}
        </p>
        <div class="flex place-content-end items-end pe-1 pb-1 ">
          <p class="text-s p-2  pt-0 font-light text-gray-400">
            {{ mascota.age }} años
          </p>
        </div>
      </div>
      }
    </div>
  `,
  styles: `#containerMascotas {
    background: #0c1220ed;
  }`,
})
export class MascotaComponent {
  @Input() mascotas: MascotaInterface[] = [];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="bottom-0 left-0 z-20 w-full p-4 ">
      <span
        class="flex justify-center text-sm  text-gray-500  dark:text-gray-400 "
      >
        ©2025 AdoptaUnaMascota. Todos los derechos reservados
      </span>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {}

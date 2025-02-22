import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { FooterComponent } from './components/footer/footer.component';

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
  mascotas = [
    {
      id: 1,
      name: 'Max',
      type: 'perro',
      age: 3,
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      description:
        'Max es un perro de 3 años que le gusta jugar con sus amigos.',
    },
    {
      id: 2,
      name: 'Luna',
      type: 'gato',
      age: 2,
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      description:
        'Luna es un gato de 2 años que le gusta jugar con sus amigos.',
    },
    {
      id: 3,
      name: 'Nala',
      type: 'perro',
      age: 4,
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
      description:
        'Nala es un perro de 4 años que le gusta jugar con sus amigos.',
    },
    {
      id: 4,
      name: 'Luna',
      type: 'gato',
      age: 2,
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
      description:
        'Luna es un gato de 2 años que le gusta jugar con sus amigos.',
    },
    {
      id: 5,
      name: 'Nala',
      type: 'perro',
      age: 4,
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
      description:
        'Nala es un perro de 4 años que le gusta jugar con sus amigos.',
    },
    {
      id: 6,
      name: 'Luna',
      type: 'gato',
      age: 2,
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
      description:
        'Luna es un gato de 2 años que le gusta jugar con sus amigos.',
    },
    {
      id: 7,
      name: 'Nala',
      type: 'perro',
      age: 4,
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
      description:
        'Nala es un perro de 4 años que le gusta jugar con sus amigos.',
    },
    {
      id: 8,
      name: 'Luna',
      type: 'gato',
      age: 2,
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
      description:
        'Luna es un gato de 2 años que le gusta jugar con sus amigos.',
    },
    {
      id: 9,
      name: 'Nala',
      type: 'perro',
      age: 4,
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
      description:
        'Nala es un perro de 4 años que le gusta jugar con sus amigos.',
    },
    {
      id: 10,
      name: 'Luna',
      type: 'gato',
      age: 2,
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
      description:
        'Luna es un gato de 2 años que le gusta jugar con sus amigos.',
    },
    {
      id: 11,
      name: 'Nala',
      type: 'perro',
      age: 4,
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
      description:
        'Nala es un perro de 4 años que le gusta jugar con sus amigos.',
    },
    {
      id: 1,
      name: 'Max',
      type: 'perro',
      age: 3,
      image:
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      description:
        'Max es un perro de 3 años que le gusta jugar con sus amigos.',
    },
  ];
}

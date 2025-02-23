import { Injectable } from '@angular/core';
import { MascotaInterface } from '../interfaces/mascota-interface';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  private mascotas: MascotaInterface[] = [
    {
      id: 1,
      name: 'Max',
      type: 'perro',
      age: 3,
      image: 'assets/dog-6.jpg',
      description:
        'Max es un perro de 3 años que le gusta jugar con sus amigos.',
    },
    {
      id: 2,
      name: 'Luna',
      type: 'gato',
      age: 2,
      image: 'assets/cat-5.jpg',
      description:
        'Luna es un gato de 2 años que le gusta jugar con sus amigos.',
    },
    {
      id: 3,
      name: 'Nala',
      type: 'perro',
      age: 4,
      image: 'assets/dog-2.jpg',
      description:
        'Nala es un perro de 4 años que le gusta jugar con sus amigos.',
    },
    {
      id: 4,
      name: 'Luna',
      type: 'gato',
      age: 2,
      image: 'assets/cat-2.jpg',
      description:
        'Luna es un gato de 2 años que le gusta jugar con sus amigos.',
    },
    {
      id: 5,
      name: 'Nala',
      type: 'perro',
      age: 4,
      image: 'assets/dog-3.jpg',
      description:
        'Nala es un perro de 4 años que le gusta jugar con sus amigos.',
    },
    {
      id: 6,
      name: 'Luna',
      type: 'gato',
      age: 2,
      image: 'assets/cat-3.jpg',
      description:
        'Luna es un gato de 2 años que le gusta jugar con sus amigos.',
    },
    {
      id: 7,
      name: 'Nala',
      type: 'perro',
      age: 4,
      image: 'assets/dog-4.jpg',
      description:
        'Nala es un perro de 4 años que le gusta jugar con sus amigos.',
    },
    {
      id: 8,
      name: 'Luna',
      type: 'gato',
      age: 2,
      image: 'assets/cat-4.jpg',
      description:
        'Luna es un gato de 2 años que le gusta jugar con sus amigos.',
    },
    {
      id: 9,
      name: 'Nala',
      type: 'perro',
      age: 4,
      image: 'assets/dog-5.jpg',
      description:
        'Nala es un perro de 4 años que le gusta jugar con sus amigos.',
    },
    {
      id: 10,
      name: 'Luna',
      type: 'gato',
      age: 2,
      image: 'assets/cat-5.jpg',
      description:
        'Luna es un gato de 2 años que le gusta jugar con sus amigos.',
    },
    {
      id: 11,
      name: 'Nala',
      type: 'perro',
      age: 4,
      image: 'assets/dog-6.jpg',
      description:
        'Nala es un perro de 4 años que le gusta jugar con sus amigos.',
    },
    {
      id: 12,
      name: 'Max',
      type: 'perro',
      age: 3,
      image: 'assets/dog-3.jpg',
      description:
        'Max es un perro de 3 años que le gusta jugar con sus amigos.',
    },
  ];
  constructor() {}
  getAllMascotas(): MascotaInterface[] {
    return this.mascotas;
  }
}

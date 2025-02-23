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
        'Max es un perro juguetón que disfruta de los paseos en el parque.',
    },
    {
      id: 2,
      name: 'Bella',
      type: 'gato',
      age: 2,
      image: 'assets/cat-2.jpg',
      description:
        'Bella es una gata curiosa que le encanta explorar su entorno.',
    },
    {
      id: 3,
      name: 'Rocky',
      type: 'perro',
      age: 4,
      image: 'assets/dog-2.jpg',
      description: 'Rocky es un perro leal con un gran sentido de la aventura.',
    },
    {
      id: 4,
      name: 'Milo',
      type: 'gato',
      age: 2,
      image: 'assets/cat-3.jpg',
      description:
        'Milo es un gato travieso que siempre está buscando algo con que jugar.',
    },
    {
      id: 5,
      name: 'Buddy',
      type: 'perro',
      age: 4,
      image: 'assets/dog-3.jpg',
      description:
        'Buddy es un perro amigable que disfruta conocer nuevas personas.',
    },
    {
      id: 6,
      name: 'Coco',
      type: 'gato',
      age: 2,
      image: 'assets/cat-4.jpg',
      description:
        'Coco es una gata elegante que prefiere los lugares tranquilos y soleados.',
    },
    {
      id: 7,
      name: 'Charlie',
      type: 'perro',
      age: 4,
      image: 'assets/dog-4.jpg',
      description:
        'Charlie es un perro energético que adora correr en el jardín.',
    },
    {
      id: 8,
      name: 'Lola',
      type: 'gato',
      age: 2,
      image: 'assets/cat-5.jpg',
      description:
        'Lola es una gata juguetona que siempre está buscando atención.',
    },
    {
      id: 9,
      name: 'Zeus',
      type: 'perro',
      age: 4,
      image: 'assets/dog-5.jpg',
      description:
        'Zeus es un perro fuerte y valiente que protege a su familia.',
    },
    {
      id: 10,
      name: 'Simba',
      type: 'gato',
      age: 2,
      image: 'assets/cat-5.jpg',
      description:
        'Simba es un gato aventurero que le encanta trepar a los árboles.',
    },
    {
      id: 11,
      name: 'Buster',
      type: 'perro',
      age: 4,
      image: 'assets/dog-6.jpg',
      description: 'Buster es un perro cariñoso que disfruta de las caricias.',
    },
    {
      id: 12,
      name: 'Rex',
      type: 'perro',
      age: 3,
      image: 'assets/dog-2.jpg',
      description:
        'Rex es un perro curioso que siempre está listo para una aventura.',
    },
  ];
  constructor() {}
  getAllMascotas(): MascotaInterface[] {
    return this.mascotas;
  }
}

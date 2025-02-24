import { Injectable } from '@angular/core';
import { MascotaInterface } from '../interfaces/mascota-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  private apiUrl = 'http://localhost:3000/mascotas';
  constructor(private http: HttpClient) {}

  getAllMascotas() {
    return this.http.get<MascotaInterface[]>(this.apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Alumno } from './alumno';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // BehaviorSubject con un array vacío como valor inicial
  private alumnosSubject = new BehaviorSubject<Alumno[]>([]);

  // Observable que emite el array de alumnos
  alumnos$ = this.alumnosSubject.asObservable();

  constructor() { }

  // Método para agregar un alumno al array y notificar a los suscriptores
  agregarAlumno(alumno: Alumno) {
    this.alumnosSubject.next([...this.alumnosSubject.value, alumno]);
  }

  // Método para obtener el array de alumnos como observable
  getAlumnos(): Observable<Alumno[]> {
    return this.alumnos$;
  }

  // Método para eliminar un alumno del array y notificar a los suscriptores
  eliminarAlumno(index: number) {
    const alumnos = [...this.alumnosSubject.value];
    alumnos.splice(index, 1);
    this.alumnosSubject.next(alumnos);
  }

  // Método para actualizar un alumno en el array y notificar a los suscriptores
  actualizarAlumno(alumno: Alumno, index: number) {
    const alumnos = [...this.alumnosSubject.value];
    alumnos[index] = alumno;
    this.alumnosSubject.next(alumnos);
  }
}

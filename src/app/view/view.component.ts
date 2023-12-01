import { Component,OnInit } from '@angular/core';
import { Alumno } from '../alumno';
import { CrudService } from '../crud.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent  {
  Alumnos: Alumno[] = [];
  alumno: Alumno = {
    nombre: '',
    cuenta: '',
    grupo: ''
  };

  constructor(private crudService: CrudService) { }

  //Observable para obtener los alumnos del arreglo
  ngOnInit() {
    //Suscribirse al observable para obtener los alumnos de tipo Alumno[]
    this.crudService.getAlumnos().subscribe((data: Alumno[]) => {
      this.Alumnos = data;
    });
  }
  
  onEdit(alumno: Alumno,index: number) {
      this.crudService.actualizarAlumno(alumno,index);
    
  }

  onDelete(index: number) {
    this.crudService.eliminarAlumno(index);
  }



}

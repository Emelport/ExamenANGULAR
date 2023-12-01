import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { Alumno } from '../alumno';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  
  alumno: Alumno = {
    nombre: '',
    cuenta: '',
    grupo: ''
  };

  constructor(private crudService: CrudService) { }

  onSubmit() {
    //console.log(this.alumno);
    this.crudService.agregarAlumno(this.alumno);
    this.alumno = {
      nombre: '',
      cuenta: '',
      grupo: ''
    };
  }

}

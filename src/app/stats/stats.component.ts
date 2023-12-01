import { Component,OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Alumno } from '../alumno';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent implements OnInit {

  Alumnos: Alumno[] = [];
  alumno: Alumno = {
    nombre: '',
    cuenta: '',
    grupo: ''
  };
  //objeto grupo para almacenar los grupos y la cantidad de alumnos por grupo
  Grupos: any[] = [];
  AlumnosporGrupo: { grupo: string, cantidad: number }[] = [];



  constructor(private crudService: CrudService) { }

  ngOnInit() {

    this.crudService.getAlumnos().subscribe((data: Alumno[]) => {
      this.Alumnos = data;
      console.log("Alumnos",data);
      this.obtenerAlumnosporGrupo();

      //reiniciar el componente
      this.Grupos = [];

    });
    
  }


  obtenerAlumnosporGrupo(){
    this.AlumnosporGrupo = [];
    //recorrer el arreglo de alumnos y obtener los grupos
    this.Alumnos.forEach(alumno => {
      //si el grupo no existe en el arreglo de grupos, agregarlo
      if(!this.Grupos.includes(alumno.grupo)){
        this.Grupos.push(alumno.grupo);
      }
    });

    //recorrer el arreglo de grupos y contar los alumnos por grupo
    this.Grupos.forEach(grupo => {
      let contador = 0;
      this.Alumnos.forEach(alumno => {
        if(alumno.grupo == grupo){
          contador++;
        }
      });
      this.AlumnosporGrupo.push({
        grupo: grupo,
        cantidad: contador
      });
    });



  }




}

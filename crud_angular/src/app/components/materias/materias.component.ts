import { Component } from '@angular/core';
import { HorariosService } from 'src/app/service/horarios.service';
@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent {
  materiasarr:any[]= [];
  profesoresarr:any[]= []; 
  
  constructor(horario: HorariosService) {
    horario.obtenerMaterias().subscribe((data: any[]) => {
      this.materiasarr = data;
    });
  }

}

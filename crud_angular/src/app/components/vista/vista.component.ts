import { Component } from '@angular/core';
import { HorariosService } from 'src/app/service/horarios.service';
@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {
  //
  materiasarr:any[]= [];
  profesoresarr:any[]= []; 
  
  constructor(horario: HorariosService) {
    horario.obtenerMaestros().subscribe((data: any[]) => {
      this.profesoresarr = data;
      console.log(this.profesoresarr[0].horasDisponibles[0].Jueves.HoraInicio)
    });
  }
  
}

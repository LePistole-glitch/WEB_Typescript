import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { NgModule } from '@angular/core';
import { HorariosService } from 'src/app/service/horarios.service';
import { HttpClient } from '@angular/common/http';
import { generarhorario } from 'src/app/clases/generarhorarios';
import { profesor } from 'src/app/clases/profesor';
import { materias } from 'src/app/clases/materias';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent {

  materiasarr:materias[]= [];
  profesoresarr:profesor[]= []; 
  horarioGen:any [] = [];
  
  constructor(horario: HorariosService) {
    horario.obtenerMaestros().subscribe((data: profesor[]) => {
      this.profesoresarr = data;
    });
    
    
    horario.obtenerMaterias().subscribe((data: materias[]) => {
      this.materiasarr = data;
      horario.obtenerMaestros().subscribe((data: profesor[])=> {
        this.profesoresarr = data;
      })

      //console.log(generarhorario.coincidematerias(this.materiasarr[0], this.profesoresarr[1]))
      //console.log(generarhorario.traermateriasprofe(this.materiasarr, this.profesoresarr[1]))
    })
  }

  generaHorario(){
    this.horarioGen = (generarhorario.generaHorario(this.materiasarr, this.profesoresarr)) 
    //console.log(this.horarioGen)
//console.log(generarhorario.coincidematerias(this.materiasarr[0], this.materiasarr[2]))
    //console.log(this.materiasarr)
  }
}

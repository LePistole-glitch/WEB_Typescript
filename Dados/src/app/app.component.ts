import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dados';
  dadoIzquierdo='../assets/img/Dado1.png';
  dadoDerecho='../assets/img/Dado2.png';
  numero1: number =0;
  numero2: number =0;
   
  tirarDados(): void 
  {
    this.numero1=Math.round( Math.random()*5)+1;
    this.numero2=Math.round( Math.random()*5)+1;
    this.dadoIzquierdo='../assets/img/dado' + this.numero1 +'.png';
    this.dadoDerecho='../assets/img/dado' + this.numero2 + '.png';
  }
}
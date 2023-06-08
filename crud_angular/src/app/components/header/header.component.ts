import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  rutaActual: ActivatedRoute;

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute,
  private router: Router) { 
    this.rutaActual = route;
  }
}

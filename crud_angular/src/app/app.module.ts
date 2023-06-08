import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

import { UsuarioService } from './shared/usuario.service';
import { VistaComponent } from './components/vista/vista.component';
import { MateriasComponent } from './components/materias/materias.component';
import { HorarioComponent } from './components/horario/horario.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EditarUsuarioComponent,
    ListaUsuariosComponent,
    VistaComponent,
    MateriasComponent,
    HorarioComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
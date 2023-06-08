import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) 
  { 

  }
  
  obtenerMaestros()
  {
    return this.http.get<any[]>(this.BASE_URL+'/profesores');
  }
  obtenerMaterias()
  {
    return this.http.get<any[]>(this.BASE_URL+'/materias');
  }
}

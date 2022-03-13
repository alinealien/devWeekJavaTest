import { Injectable } from '@angular/core';
import { Regiao } from '../model/regiao';
import { HttpClient } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  constructor( 
    
    private http:HttpClient
    ) { }

    listRegioes(): Observable<Regiao[]>{
      const url = './api/regioes';
      return this.http.get<Regiao[]>(url);
      //const url = 'http://localhost:8080'; //caminho definido no spring
      //const url = './assets/regioes.json';
      
  
    }
  }
     //{id:1, regiao: "Norte", total: 15},
    //{id:2, regiao: "Nordeste", total: 10},
    //{id:2, regiao: "Sudeste", total: 200},
    //{id:2, regiao: "Sul", total: 80},
    //{id:2, regiao: "Centro-Oeste", total: 8}



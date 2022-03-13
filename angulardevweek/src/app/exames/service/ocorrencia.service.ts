import { Injectable } from '@angular/core';
import { Ocorrencia } from '../model/ocorrencia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {

    constructor( 

    private http:HttpClient
  ) { }

    listOcorrencias(): Observable<Ocorrencia[]>{
      const url = './api/ocorrencias';
      return this.http.get<Ocorrencia[]>(url);
    }
}
       // { id: 1, regiao_id: 2, mes: 5, faixa_id: 1, qnt_exames: 44 }
      //];
    


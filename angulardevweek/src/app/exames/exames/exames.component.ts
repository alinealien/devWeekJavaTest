import { Component, OnInit } from '@angular/core';
import { Faixaetaria } from '../model/faixaetaria';
import { Ocorrencia } from '../model/ocorrencia';
import { Regiao } from '../model/regiao';
import { FaixaetariaService } from '../service/faixaetaria.service';
import { OcorrenciaService } from '../service/ocorrencia.service';
import { RegiaoService } from '../service/regiao.service';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})


export class ExamesComponent implements OnInit {

  ocorrencia_exame: Ocorrencia[] = [];
  regioes: Regiao[] = [];
  faixaetarias: Faixaetaria[] = [];
  

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private regioesService: RegiaoService,
    private faixaetariaService: FaixaetariaService
  ) { }

  ngOnInit(): void {
    
    this.regioesService.listRegioes().subscribe(regioes => {this.regioes = regioes});
    
    this.ocorrenciaService.listOcorrencias().subscribe(ocorrencia_exame => {this.ocorrencia_exame = ocorrencia_exame});
    
   this.faixaetariaService.listFaixaEtaria().subscribe(faixaetarias => {this.faixaetarias = faixaetarias});
    
   
  
  }
  

}

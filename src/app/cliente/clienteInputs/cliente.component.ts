import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

 id: string;
 @Input() ID_CLIENTE: number;
  @Input() nome: string;
  @Input() Data_Cadastro: string;
  @Input() TELEFONE: string;
  @Input() TELEFONE2: string;
  @Input() FAX: string;
  @Input() CELULAR: string;
  @Input() CONTATOx: string;
  @Input() OBS: string;
  @Input() EMAIL: string;
  @Input() TIPO_PESSOA: string;
  @Input() CPF: string;
  @Input() RG: string;
  @Input() SEGMENTO: string;
  @Input() RAMO: string;
  @Input() RAZAO_SOCIAL: number;
  @Input() title: string;
  @Input() DESDE: string;
  @Input() CNPJ: string;
  @Input() DataNascimento: string;
  @Input() INDICADO: string;
  @Input() SEXO: string;
  @Input() COR_PELE: string;
  @Input() ESTADO_CIVIL: string;
  @Input() NATURALIDADE: string;
  @Input() PROFISSAO: string;
  @Input() NOME_MAE: string;
  @Input() NOME_PAI: string;
  @Input() basico: boolean;
  @Input() CLASSIFICACAO: string;
  @Input() ALERTA_CLINICO: string;
  @Input() INDICACAO_OUTRO: string;
  @Input() menor: boolean;
  @Input() RESPONSAVEL: string;
  @Input() CPF_RESPONSAVEL: string;
    @Input() indicacao: number;
  @Input() DIR_FOTO: string;
  @Input() NOME_PREFERENCIA: string;
  

  constructor() { }



  ngOnInit() {
  }

}

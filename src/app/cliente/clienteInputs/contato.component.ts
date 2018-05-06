import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ContatoComponent implements OnInit {

 id: string;
  @Input() ID_CONTATO: number;
  @Input() ID_CLIENTE   : string;
  @Input() cONTATO: string;
  @Input() Data_Cadastro: string;
  @Input()  TELEFONE: string;
  @Input() CELULAR: string;
  @Input() EMAIL: string;
  @Input() AREA: string;
 @Input() Data_Nascimento: string;
  @Input() Vinculo: string; 
   @Input() Dados_Bancarios: string;
  @Input() Profissao: string;

  constructor() { }



  ngOnInit() {
  }

}
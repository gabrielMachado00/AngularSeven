import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class EnderecoComponent implements OnInit {

 id: string;
  @Input() nome: string;
  @Input() Data_Cadastro: string;
  @Input() TELEFONE: string;
  @Input() TELEFONE2: string;
  @Input() FAX: string;
  @Input() CELULAR: string;
  @Input() CONTATOx: string;
  @Input() OBS: string;





  constructor() { }



  ngOnInit() {
  }

  }
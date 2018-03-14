import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../clienteService';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteComponent } from '../clienteInputs/cliente.component';
import { ConvenioComponent} from '../clienteInputs/convenio.component';


import { indicacao } from '../Indicacao';
import { convenio_contato } from '../convenio_contato';
import { endereco } from '../endereco';

import { contato } from '../contato';

import { ContatoService } from '../ContatoService';
import { ConvenioService } from '../ConvenioService';

@Component({

    selector: 'app-cadastro-cliente',
    templateUrl: './cadastro-cliente.component.html',
    styleUrls: ['./cadastro-cliente.component.css'],
    providers: [ClienteService, ContatoService, ConvenioService],

  
})
export class CadastroClienteComponent implements OnInit {

    ngOnInit() {

    }

private gridOptions:any=[];

    busy: boolean = false;
    listaIndicacao: indicacao[] = [];
    listaConvenio: convenio_contato[] = [];
    listaContato: contato[] = [];
    listaEndereco: endereco[] = [];

    contatoService: ContatoService;
    convenioService: ConvenioService;

    cliente: ClienteComponent = new ClienteComponent();
     convenio: ConvenioComponent = new ConvenioComponent();
    meuForm: FormGroup;
    clienteService: ClienteService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';
    fb: FormGroup;
     
  columnDefs() {
      return [
    {headerName: "nome", field: "Nome", width: 100,},
    {headerName: "telefone", field: "telefone", width: 100},
    {headerName: "celular", field: "celular", width: 100},
    {headerName: "email", field: "email", width: 100},
 



  ]


  } 
    CheckMenor(e) {

        if (e.target.checked) {

            this.cliente.menor = true;
        }
        else {

            this.cliente.menor = false;
        }
    }



    constructor(clienteService: ClienteService,contatoService: ContatoService,convenioService: ConvenioService, fb: FormBuilder, route: ActivatedRoute, router: Router) {

        this.clienteService = clienteService;

        this.route = route;
        this.router = router;




}


    GetIndicacao(event) {





        this.clienteService.getIndicacao().subscribe(data => {
            this.listaIndicacao = data;

            console.log(data);


        },

            error => alert(error),
            () => { this.busy = false; }
        );
    }

    cadastrar(event) {

        event.preventDefault();

        console.log(this.cliente);

        this.clienteService
            .PostCliente(this.cliente)
            .subscribe(res => {
                this.mensagem = res.mensagem;
                this.cliente = new ClienteComponent();
                if (!res.inclusao) this.router.navigate(['']);
            }, erro => console.log(erro));

    }

  


            }
    

  



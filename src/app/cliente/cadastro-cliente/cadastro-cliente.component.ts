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

    constructor(clienteService: ClienteService,contatoService: ContatoService, convenioService: ConvenioService, private fb: FormBuilder, route: ActivatedRoute, router: Router) {

        this.clienteService = clienteService;

        this.route = route;
        this.router = router;


        this.meuForm = this.fb.group({  
    ID_CLIENTE:['', [Validators.required]],
    nome: ['', [Validators.required]],
    Data_Cadastro:['', [Validators.required]],
     TELEFONE: ['', [Validators.required]],
     TELEFONE2: ['', [Validators.required]],
   FAX: ['', [Validators.required]],
    CELULAR: ['', [Validators.required]],
     CONTATOx: ['', [Validators.required]],
OBS: ['', [Validators.required]],
 EMAIL: ['', [Validators.required]],
CPF: ['', [Validators.required]],
RG: ['', [Validators.required]],
       SEGMENTO: ['', [Validators.required]],
     RAMO: ['', [Validators.required]],
          RAZAO_SOCIAL:['', [Validators.required]],
           title:['', [Validators.required]],
         DESDE: ['', [Validators.required]],
       CNPJ: ['', [Validators.required]],
           DataNascimento: ['', [Validators.required]],
     INDICADO: ['', [Validators.required]],
      SEXO: ['', [Validators.required]],

  ESTADO_CIVIL: ['', [Validators.required]],
 NATURALIDADE: ['', [Validators.required]],
PROFISSAO:['', [Validators.required]],
    NOME_MAE:['', [Validators.required]],
 NOME_PAI: ['', [Validators.required]],

  CLASSIFICACAO: ['', [Validators.required]],
      ALERTA_CLINICO: ['', [Validators.required]],

   RESPONSAVEL:['', [Validators.required]],
    CPF_RESPONSAVEL:['', [Validators.required]],


        })  



        if (this.route.snapshot.params["id"]) {  
            this.id = this.route.snapshot.params["id"];  
        }  
  
}





    ngOnInit() {
        if (this.id > 0) {  
            this.title = "Edit";  
            this.clienteService.getCliente(this.id)  
            .subscribe(cliente=>{
               this.cliente=cliente;
            });
}
    }
private gridOptions:any=[];

    busy: boolean = false;
    listaIndicacao: indicacao[] = [];
    listaConvenio: convenio_contato[] = [];
    listaContato: contato[] = [];
    listaEndereco: endereco[] = [];
    id: number;  
    contatoService: ContatoService;
    convenioService: ConvenioService;
title:string = "Create";
    cliente: ClienteComponent = new ClienteComponent();
     convenio: ConvenioComponent = new ConvenioComponent();
    meuForm: FormGroup;
    clienteService: ClienteService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';
    fb: FormGroup;


    CheckMenor(e) {

        if (e.target.checked) {

            this.cliente.menor = true;
        }
        else {

            this.cliente.menor = false;
        }
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

    Salvar(event) {
        if (!this.meuForm.valid) {  
            return;  
        }

        event.preventDefault();

        console.log(this.cliente);
        if (this.title == "Create") {  
        this.clienteService
            .PostCliente(this.cliente)
            .subscribe(res => {
                this.mensagem = res.mensagem;
                this.cliente = new ClienteComponent();
                if (!res.inclusao) this.router.navigate(['']);
            }, erro => console.log(erro));


        }

        else if (this.title == "Edit") {  
            this.clienteService.putCliente(this.id)  
                .subscribe((data) => {  
                      
                }, erro => console.log(erro));
        }  

            
    }

  


            }
    

  



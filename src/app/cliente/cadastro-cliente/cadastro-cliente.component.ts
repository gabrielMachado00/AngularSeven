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


   


        if (this.route.snapshot.params["id"]) {  
            this.id = this.route.snapshot.params["id"];  
        }  


  
}





    ngOnInit() {



        this.meuForm = this.fb.group({  
            ID_CLIENTE:['', [Validators.required]],
           NOME: ['', [Validators.required]],
            Data_Cadastro:['', [Validators.required]],
             TELEFONE: ['', [Validators.required]],
             TELEFONE2: ['', [Validators.required]],
           FAX: ['', [Validators.required]],
            CELULAR: ['', [Validators.required]],
             CONTATO: ['', [Validators.required]],
        OBS: ['', [Validators.required]],
         EMAIL: ['', [Validators.required]],
        CPF: ['', [Validators.required]],
        RG: ['', [Validators.required]],
               SEGMENTO: ['', [Validators.required]],
             RAMO: ['', [Validators.required]],
                  RAZAO_SOCIAL:['', [Validators.required]],

                 DESDE: ['', [Validators.required]],
               CNPJ: ['', [Validators.required]],
                   DataNascimento: ['', [Validators.required]],

              SEXO: ['', [Validators.required]],
        ID_INDICACAO: ['', [Validators.required]],
          ESTADO_CIVIL: ['', [Validators.required]],
      
        PROFISSAO:['', [Validators.required]],
            NOME_MAE:['', [Validators.required]],
         NOME_PAI: ['', [Validators.required]],
         NATURALIDADE: ['', [Validators.required]],
          CLASSIFICACAO: ['', [Validators.required]],
    
           RESPONSAVEL:['', [Validators.required]],
            CPF_RESPONSAVEL:['', [Validators.required]],
            OBSERVACAO:['', [Validators.required]],


    })





        if (this.id > 0) {  
            this.title = "Edit";  
            this.clienteService.getCliente(this.id)  
            .subscribe(cliente=>{
               this.cliente=cliente;

            var nome=this.cliente[0].NOME;
            var Data_Cadastro=this.cliente[0].DATA_CADASTRO;
            var  TELEFONE=this.cliente[0].TELEFONE;
            var   TELEFONE2=cliente[0].TELEFONE2;
              var  FAX=cliente[0].FAX;
             var   CELULAR=cliente[0].CELULAR;
           var      CONTATO=cliente[0].CONTATO;
              var OBS=cliente[0].OBS;
           var    EMAIL=cliente[0].EMAIL;
          var  CPF=cliente[0].CPF;
             var  RG=cliente[0].RG;
             var  OBSERVACAO=cliente[0].OBSERVACAO;
             var RAZAO_SOCIAL=cliente[0].RAZAO_SOCIAL;

             var   DESDE= cliente[0].DESDE;
             var  CNPJ=cliente[0].CNPJ;
             var     DataNascimento=cliente[0].DataNascimento;
             var  SEXO=cliente[0].SEXO;
             var  ESTADO_CIVIL= cliente[0].ESTADO_CIVIL;
             var  NATURALIDADE= cliente[0].NATURALIDADE;
             var PROFISSAO=cliente[0].PROFISSAO;
             var     NOME_MAE=cliente[0].NOME_MAE;
             var  NOME_PAI= cliente[0].NOME_PAI;
    
             var   CLASSIFICACAO=cliente[0].CLASSIFICACAO;
             var  ID_INDICACAO=cliente[0].ID_INDICACAO;
             var  RESPONSAVEL=cliente[0].RESPONSAVEL;
             var  CPF_RESPONSAVEL=cliente[0].CPF_RESPONSAVEL;


            this.meuForm.patchValue({
                NOME:nome, 
                Data_Cadastro: Data_Cadastro,
                TELEFONE:TELEFONE,
        TELEFONE2:TELEFONE2,
           FAX:FAX,
                CELULAR:CELULAR,
            CONTATO:CONTATO,
             OBS:OBS,
               EMAIL:EMAIL,
        CPF:CPF,
            RG:RG,
            ID_INDICACAO:ID_INDICACAO,
                 RAZAO_SOCIAL: RAZAO_SOCIAL,

                DESDE: DESDE,
              CNPJ: CNPJ,
                  DataNascimento:DataNascimento,
                  OBSERVACAO:OBSERVACAO,
             SEXO: SEXO,
       
         ESTADO_CIVIL: ESTADO_CIVIL,
        NATURALIDADE:NATURALIDADE,
       PROFISSAO:PROFISSAO,
           NOME_MAE:NOME_MAE,
        NOME_PAI:NOME_PAI,
       
         CLASSIFICACAO: CLASSIFICACAO,
   
          RESPONSAVEL:RESPONSAVEL,
           CPF_RESPONSAVEL:CPF_RESPONSAVEL,


                // formControlName2: myValue2 (can be omitted)
              });

        
     
            })            

          
            
}

        




        
}


private gridOptions:any=[];

    busy: boolean = false;
    listaIndicacao: indicacao[] = [];
    listaConvenio: convenio_contato[] = [];
    listaContato: contato[] = [];
    listaEndereco: endereco[] = [];
    id: number;  
    clientes:string;
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
     

        event.preventDefault();

 
        this.clienteService
            .PostCliente(this.cliente)
            .subscribe(res => {
                this.mensagem = res.mensagem;
                this.cliente = new ClienteComponent();
               
            }, erro => console.log(erro));


        }


            }
    

  



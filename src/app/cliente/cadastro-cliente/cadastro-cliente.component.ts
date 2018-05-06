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

  this.signupForm= fb.group({
      NOME:['',[Validators.required]],
     CPF:['',[Validators.required,Validators.maxLength(10)]],
      RG:['',[Validators.required]]

          })

  
}


nome:string;
data_cadastro:string;
Telefone:string;

Telefone2:string;
Celular:string;
errorMessage: any;  

    ngOnInit() {






    if (this.id > 0) {  
        this.title = "Edit";  
        this.clienteService.getCliente(this.id)  
        .subscribe(resp => {this.signupForm.patchValue(resp[0])  
        
         console.log(resp[0])
        , error => this.errorMessage = error});  




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
     signupForm: FormGroup;
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
     
 
        if (this.title == "Create") {  
        this.clienteService
            .PostCliente(this.cliente)
            .subscribe(res => {
                this.mensagem = res.mensagem;
                this.cliente = new ClienteComponent();
               
            }, erro => console.log(erro));
        }
     
     
        else if (this.title == "Edit") {  

            this.clienteService
            .putCliente(this.id,this.signupForm.value)
            .subscribe(res => {
                
                this.mensagem = res.mensagem;
                this.cliente = new ClienteComponent();


            }) 

        }
    }
    }
   
    

  



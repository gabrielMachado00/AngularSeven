import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import{ConvenioService} from '../ConvenioService';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ConvenioComponent} from '../clienteInputs/convenio.component';
import { indicacao } from '../Indicacao';
import { convenio_contato } from '../convenio_contato';

@Component({
  selector: 'app-cadastro-convenio',
  templateUrl: './cadastro-convenio.component.html',
  styleUrls: ['./cadastro-convenio.component.css']
})
export class CadastroConvenioComponent implements OnInit {



 ngOnInit() {
  }



    cliente: ConvenioComponent = new ConvenioComponent();
    meuForm: FormGroup;
    service: ConvenioService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';

    constructor(service:ConvenioService, fb: FormBuilder, route: ActivatedRoute, router: Router) {

        this.service = service;        
        
        this.route = route;
        this.router = router;

    
    

    }

    cadastrar(event) {

        event.preventDefault();

        console.log(this.cliente);

        this.service
            .PostConvenio_Contato(this.cliente)
            .subscribe(res => {
                this.mensagem = res.mensagem;
                this.cliente = new ConvenioComponent();
                if(!res.inclusao) this.router.navigate(['']);
            }, erro => console.log(erro));

}
} 


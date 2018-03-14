import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{ContatoService} from '../ContatoService';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ContatoComponent} from '../clienteInputs/contato.component';
import { convenio_contato } from '../convenio_contato';





@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.css']
})


 


export class CadastroContatoComponent { 

 ngOnInit() {
  }

    contato: ContatoComponent = new ContatoComponent();
    meuForm: FormGroup;
    service: ContatoService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';

    constructor(service:ContatoService, fb: FormBuilder, route: ActivatedRoute, router: Router) {

        this.service = service;        
        
        this.route = route;
        this.router = router;

    
    
    
    }

    cadastrar(event) {

        event.preventDefault();

        console.log(this.contato);

        this.service
            .PostCliente_Contato(this.contato)
            .subscribe(res => {
                this.mensagem = res.mensagem;
                this.contato = new ContatoComponent();
                if(!res.inclusao) this.router.navigate(['']);
            }, erro => console.log(erro));

}
} 




import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-cliente',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.css']
})
export class ConvenioComponent implements OnInit {

    @Input() ID_CONTATO_CONVENIO: number;
    @Input() ID_CONVENIO: number;
    @Input() Nome: string;
    @Input() Telefone: string;
    @Input() celular: string;
    @Input() email: string;


    constructor() { }



    ngOnInit() {
    }

}
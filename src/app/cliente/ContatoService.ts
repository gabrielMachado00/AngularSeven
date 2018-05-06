import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ClienteComponent } from '../cliente/clienteInputs/cliente.component';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


import { ContatoComponent } from '../cliente/clienteInputs/contato.component';

@Injectable()

export class ContatoService {

   

    headers: Headers;
    _http: Http;
    constructor(_http: Http) {

        this._http = _http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    getClientes_Contato(id:number) {

        return this._http.get('http://localhost:52528'+id+'/Clientes/').map((response: Response) => response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

      getContato(id: number) {

        return this._http.get('http://localhost:52528/api/contato/' +id).map((response: Response) => response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

 
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    PostCliente_Contato(cliente: ContatoComponent): Observable<MensagemCadastro> {
        return this._http.post('http://localhost:52528/api/ContatoCliente/PostCLIENTE', JSON.stringify(cliente), { headers: this.headers })
            .map(() => new MensagemCadastro('Contato incluido com sucesso', true));

    }


   putCliente_Contato(contato: ContatoComponent): Observable<MensagemCadastro> {
        return this._http.put('http://localhost:52528/api/ContatoCliente/PutCliente/'
        + contato.ID_CONTATO, JSON.stringify(contato), { headers: this.headers })
            .map(() => new MensagemCadastro('Contato atualizado', true));

    }
}

export class MensagemCadastro {

     constructor(private _mensagem: string, private _inclusao: boolean) {

        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }

    get mensagem(): string {
        return this._mensagem;
    }

    get inclusao(): boolean {

        return this._inclusao;
    }


}

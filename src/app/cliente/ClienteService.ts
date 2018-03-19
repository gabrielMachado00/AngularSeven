import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ClienteComponent } from '../cliente/clienteInputs/cliente.component';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';




@Injectable()

export class ClienteService {

    private delete = 'http://localhost:52528/api/Clientes/DeleteCLIENTE';

    private GetCliente= 'http://localhost:52528/api/Clientes/';

    private GetClientes= 'http://localhost:52528/api/Clientes/';

    private GetClientesNomes= 'http://localhost:52528/api/Clientes/nomes/';

     private GetAniversariantes= 'http://localhost:52528/api/Clientes/';

     private PutCliente= 'http://localhost:52528/api/Clientes/PutCliente/';

   

    headers: Headers;
    _http: Http;
    constructor(_http: Http) {

        this._http = _http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    getClientes() {

        return this._http.get('http://localhost:52528/api/Clientes/').map((response: Response) => response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

      getCliente(id: number) {

        return this._http.get('http://localhost:49427/api/Cliente/' +id).map((response: Response) => response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
 getIndicacao() {

        return this._http.get('http://localhost:49427/api/Indicacao/GetINDICACAOs').map((response: Response) => response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    getAniversariantes(dataInicial: string,dataFinal: string) {

        return this._http.get('http://localhost:49427/api/Clientes/'
        + dataInicial + '/' + dataFinal).map((response: Response) => response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    PostCliente(cliente: ClienteComponent): Observable<MensagemCadastro> {
        return this._http.post('http://localhost:49427/api/Clientes/PostCLIENTE', JSON.stringify(cliente), { headers: this.headers })
            .map(() => new MensagemCadastro('Foto incluída com sucesso', true));

    }


   putCliente(id:number): Observable<MensagemCadastro> {
        return this._http.put('http://localhost:49427/api/Clientes/PutCliente/'
        + id , { headers: this.headers })
            .map(() => new MensagemCadastro('Cliente atualizado', true));

    }

   Delete(id:number): Observable<MensagemCadastro> {
        return this._http.delete('http://localhost:49427/api/Clientes/DeleteCliente/'
        + id , { headers: this.headers })
            .map(() => new MensagemCadastro('Cliente removido', true));

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
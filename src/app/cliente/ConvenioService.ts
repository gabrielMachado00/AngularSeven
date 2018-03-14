import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ClienteComponent } from '../cliente/clienteInputs/cliente.component';
import { ConvenioComponent } from '../cliente/clienteInputs/convenio.component';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()

export class ConvenioService {

   

    headers: Headers;
    _http: Http;
    constructor(_http: Http) {

        this._http = _http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    getConvenio_Contatos(id:number) {

        return this._http.get('http://localhost:52528/api/ConvenioContatos/Contatos/'+id).map((response: Response) => response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

      getConvenio_Conv_Contatos(idConvenio: number,IdContato:number) {

        return this._http.get('http://localhost:52528/api/ConvenioContatos/'+idConvenio+'/'+IdContato).map((response: Response) => response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

 
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    PostConvenio_Contato(convenio: ConvenioComponent): Observable<MensagemCadastro> {
        return this._http.post('http://localhost:52528/api/ConvenioContato ', JSON.stringify(convenio), { headers: this.headers })
            .map(() => new MensagemCadastro('Contato incluido com sucesso', true));

    }


   putConvenio_Contato(convenio: ConvenioComponent,idContato:number,idConvenio:number): Observable<MensagemCadastro> {
        return this._http.put('http://localhost:52528/api/ConvenioContatos/PutConvenioContato/'+convenio.ID_CONTATO_CONVENIO+'/'+convenio.ID_CONVENIO
        , JSON.stringify(convenio), { headers: this.headers })
            .map(() => new MensagemCadastro('Contato atualizado', true));

    }

       DeleteCONVENIO_CONTATO(convenio:ConvenioComponent): Observable<MensagemCadastro> {
        return this._http.put('http://localhost:52528/api/ConvenioContatos/PutConvenioContato/'
        + convenio.ID_CONTATO_CONVENIO, JSON.stringify(convenio), { headers: this.headers })
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

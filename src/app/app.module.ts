import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataGridModule} from 'primeng/datagrid';

import{routing} from './app.routing';
import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';

import { ClienteComponent } from './cliente/clienteInputs/cliente.component';



import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CadastroContatoComponent } from './cliente/cadastro-contato/cadastro-contato.component';
import { CadastroEnderecoComponent } from './cliente/cadastro-endereco/cadastro-endereco.component';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';



const APP_ROUTES: Routes = [
        
            {path: 'CadastroCliente', component:CadastroClienteComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    
    ClienteComponent,
    

    CadastroClienteComponent,
    
    CadastroContatoComponent,
      CadastroEnderecoComponent,
      ListaClienteComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, 
    DataGridModule,
 
    HttpModule,
  
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

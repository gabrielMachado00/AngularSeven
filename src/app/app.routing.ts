
import{ Routes, RouterModule } from '@angular/router';
import{ModuleWithProviders} from '@angular/core';

import{CadastroClienteComponent}from './cliente/cadastro-cliente/cadastro-cliente.component';



const APP_ROUTES: Routes = [
        
            {path: 'CadastroCliente', component:CadastroClienteComponent},
            {path: 'CadastroCliente/:id', component:CadastroClienteComponent},


];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
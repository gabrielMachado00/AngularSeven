import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../clienteService';
import { ClienteComponent } from '../clienteInputs/cliente.component';
import { toastrService} from 'angular-toastr';
import {LazyLoadEvent} from 'primeng/components/common/api';
import {FilterMetadata} from 'primeng/components/common/api';


@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  public fullname: string;
  public editContactId: any;
cliente:ClienteComponent[];
  displayDeleteDialog: boolean;
  datasource: ClienteComponent[];
  totalRecords: number;
  toastrService: toastrService;
  
  constructor(private  service:ClienteService) { }

  ngOnInit() {
    this.editContactId = 0;
    
    this.service.getClientes()
    .subscribe(cliente=>{
      this.cliente =cliente;
      this.totalRecords = this.datasource.length;
      this.cliente= this.datasource.slice(0, 10);
   });

  }

  // ao carregar todos clientes na pagina ele ira mostrar sò os 10 primeiros
  //a variavel cliente passada no this.cliente que irá ser declarada no html e ira carregar os clientes 
  showDialogToDelete(cliente:ClienteComponent) {
    this.fullname = cliente.NOME_PREFERENCIA;
    this.editContactId = cliente.id;
    this.displayDeleteDialog = true;
}

//ira carregar o id e o nome do cliente 

loadData(){

  this.service.getClientes()
  .subscribe(cliente=>{
    this.cliente =cliente;
 });
}



//metodo boolean por que ira mostrar um dialog confirmado sim ou nao a exclusao
//ao confirmar a exclusao a variavel editContactId do metodo delete pro incrivel que pareça
//recebera o Id do metodo showDialogToDelete

okDelete(isDeleteConfirm: boolean) {
  if (isDeleteConfirm) {
      this.service.Delete(this.editContactId)
          .subscribe(response => {
              this.editContactId = 0;
              this.loadData();
          });
      this.toastrService.error('Deletado com sucesso!!');
  }
  this.displayDeleteDialog = false;
}


loadClienteLazy(event: LazyLoadEvent) {
  //in a real application, make a remote request to load data using state metadata from event
  //event.first = First row offset
  //event.rows = Number of rows per page
  //event.sortField = Field name to sort with
  //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
  //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
  
  //imitate db connection over a network
  setTimeout(() => {
      if(this.datasource) {
          this.cliente = this.datasource.slice(event.first, (event.first + event.rows));
      }
  }, 250);
}
}




}

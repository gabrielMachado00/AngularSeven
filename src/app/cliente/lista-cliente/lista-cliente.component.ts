import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../clienteService';
import { ClienteComponent } from '../clienteInputs/cliente.component';
import { toastrService} from 'angular-toastr';


@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  public fullname: string;
  public editContactId: any;
Cliente:ClienteComponent[];
  displayDeleteDialog: boolean;
  toastrService: toastrService;
  constructor(private  service:ClienteService) { }

  ngOnInit() {
    this.editContactId = 0;
  this.loadData();
  }
  showDialogToDelete(cliente:ClienteComponent) {
    this.fullname = cliente.NOME_PREFERENCIA;
    this.editContactId = cliente.id;
    this.displayDeleteDialog = true;
}

loadData(){

  this.service.getClientes()
  .subscribe(cliente=>{
    this.Cliente =cliente;
 });
}
okDelete(isDeleteConfirm: boolean) {
  if (isDeleteConfirm) {
      this.service.Delete(this.editContactId)
          .subscribe(response => {
              this.editContactId = 0;
              this.loadData();
          });
      this.toastrService.error('Data Deleted Successfully');
  }
  this.displayDeleteDialog = false;
}
}




}

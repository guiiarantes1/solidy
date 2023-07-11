import { Component, Input, OnInit } from '@angular/core';
import {
  AdicionarUserComponent,
  Cliente,
} from '../adicionar-user/adicionar-user.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gerenciar-user',
  templateUrl: './gerenciar-user.component.html',
  styleUrls: ['./gerenciar-user.component.scss'],
})
export class GerenciarUserComponent implements OnInit {
  formClienteEditado!: FormGroup;
  clientes: any = [];
  id!: any;
  clienteAtual:any = [];
  clienteEditado:any = []
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm(new Cliente());

    let clientesLocalStorage = localStorage.getItem('clientes');
    console.log(clientesLocalStorage);
    this.clientes =
    clientesLocalStorage == null ? [] : JSON.parse(clientesLocalStorage);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }
  createForm(cliente: Cliente) {
    this.formClienteEditado = this.formBuilder.group({
      nome: [cliente.nome, Validators.required],
      telefone: [cliente.telefone, Validators.required],
      modelo: [cliente.modelo, Validators.required],
      placa: [cliente.placa, Validators.required],
      valorPgt: [cliente.valorPgt, Validators.required],
      dataPgt: [cliente.dataPgt, Validators.required],
    });
  }

  getId(index: any) {
    this.clienteAtual = this.clientes[index];
    this.formClienteEditado.value.nome = this.clienteAtual.nome
    this.formClienteEditado.value.telefone = this.clienteAtual.telefone
    this.formClienteEditado.value.modelo = this.clienteAtual.modelo
    this.formClienteEditado.value.placa = this.clienteAtual.placa
    this.formClienteEditado.value.valorPgt = this.clienteAtual.valorPgt
    this.formClienteEditado.value.dataPgt = this.clienteAtual.dataPgt
    this.id = index;
  }

  confirmarExcluir() {
    this.clientes.splice(this.id, 1);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }


  editar(){
    this.clienteEditado.push(this.formClienteEditado.value)
    console.log(this.clienteEditado)
    if(this.clientes[this.id] != this.clienteEditado[this.id]){
      this.clientes.splice(this.id, 1);
       console.log(this.clientes)
      this.clientes.push(this.clienteEditado[this.id])
      console.log(this.clientes)
    }else{
      console.log('falhou')
    }
  }
}

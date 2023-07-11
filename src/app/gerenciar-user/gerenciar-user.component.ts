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
  formCliente!: FormGroup;
  clientes: any = [];
  id!: any;
  clienteAtual:any = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm(new Cliente());
    console.log(this.clientes);
    let clientesLocalStorage = localStorage.getItem('clientes');
    console.log(clientesLocalStorage);
    this.clientes =
    clientesLocalStorage == null ? [] : JSON.parse(clientesLocalStorage);
    console.log(this.clientes);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }
  createForm(cliente: Cliente) {
    this.formCliente = this.formBuilder.group({
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
    console.log(this.clienteAtual);
    this.id = index;
  }

  confirmarExcluir() {
    this.clientes.splice(this.id, 1);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }


}

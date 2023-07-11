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
    this.clientes.sort(function(a:any,b:any) {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
  });
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
    console.log(this.clientes[index])
    this.formClienteEditado.value.nome = this.clienteAtual.nome
    this.formClienteEditado.value.telefone = this.clienteAtual.telefone
    this.formClienteEditado.value.modelo = this.clienteAtual.modelo
    this.formClienteEditado.value.placa = this.clienteAtual.placa
    this.formClienteEditado.value.valorPgt = this.clienteAtual.valorPgt
    this.formClienteEditado.value.dataPgt = this.clienteAtual.dataPgt
    console.log(this.formClienteEditado.value)
    this.id = index;
  }

  confirmarExcluir() {
    this.clientes.splice(this.id, 1);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }


  editar(){
    this.clienteEditado.push(this.formClienteEditado.value)
    console.log(this.clienteEditado)
    if(this.formClienteEditado.value.nome == null){
      this.clienteEditado[0].nome = this.clienteAtual.nome;
    }else{
      console.log('nome atualizado')
    }
    if(this.formClienteEditado.value.telefone == null){
      this.clienteEditado[0].telefone = this.clienteAtual.telefone;
    }else{
      console.log('telefone atualizado')
    }
    if(this.formClienteEditado.value.modelo == null){
      this.clienteEditado[0].modelo = this.clienteAtual.modelo;
    }else{
      console.log('modelo atualizado')
    }
    if(this.formClienteEditado.value.placa == null){
      this.clienteEditado[0].placa = this.clienteAtual.placa;
    }else{
      console.log('placa atualizado')
    }
    if(this.formClienteEditado.value.valorPgt == null){
      this.clienteEditado[0].valorPgt = this.clienteAtual.valorPgt;
    }else{
      console.log('dataPgt atualizado')
    }
    if(this.formClienteEditado.value.dataPgt == null){
      this.clienteEditado[0].dataPgt = this.clienteAtual.dataPgt;
    }else{
      console.log('dataPgt atualizado')
    }
    this.clientes[this.id] = this.clienteEditado[0]

    localStorage.setItem('clientes', JSON.stringify(this.clientes));
    location.reload()
  }
}

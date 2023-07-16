import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-adicionar-user',
  templateUrl: './adicionar-user.component.html',
  styleUrls: ['./adicionar-user.component.scss'],
})
export class AdicionarUserComponent implements OnInit {
  formCliente!: FormGroup;
  clientes:any = [];
  formInvalid!:boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {

    this.createForm(new Cliente());
    this.formInvalid=false;
    console.log(this.formInvalid)

  }

  createForm(cliente: Cliente) {
    this.formCliente = this.formBuilder.group({
      nome: [cliente.nome, Validators.required],
      telefone: [cliente.telefone, Validators.required],
      modelo: [cliente.modelo, Validators.required],
      placa: [cliente.placa, Validators.required],
      valorPgt: [cliente.valorPgt,Validators.required],
      dataPgt: [cliente.dataPgt, Validators.required],
    })
  }

  onSubmit() {
    if(this.formCliente.value.nome == null || this.formCliente.value.modelo == null ||
      this.formCliente.value.telefone == null || this.formCliente.value.placa == null ||
      this.formCliente.value.valorPgt == null || this.formCliente.value.dataPgt == null ){
        this.formInvalid = true;
        console.log(this.formInvalid)
      } else{
        let clientesLocalStorage = localStorage.getItem('clientes')
        console.log(clientesLocalStorage);
        this.clientes = clientesLocalStorage == null ? [] : JSON.parse(clientesLocalStorage)
        console.log(this.clientes)
        this.clientes.push(this.formCliente.value)
        localStorage.setItem('clientes', JSON.stringify(this.clientes));
        this.formInvalid=false;
        console.log(this.formInvalid)
      }

  }



}

export class Cliente {
nome!:string ;
telefone!:number;
modelo!:string ;
placa!:string ;
valorPgt!: number;
dataPgt!: Date;
}

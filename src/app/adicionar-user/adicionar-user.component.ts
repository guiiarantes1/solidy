import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-adicionar-user',
  templateUrl: './adicionar-user.component.html',
  styleUrls: ['./adicionar-user.component.scss'],
})
export class AdicionarUserComponent implements OnInit {
  formCliente!: FormGroup;
  clientes:any = [];


  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createForm(new Cliente());
  }

  createForm(cliente: Cliente) {
    this.formCliente = this.formBuilder.group({
      nome: [cliente.nome],
      email: [cliente.email],
      telefone: [cliente.telefone],
      modelo: [cliente.modelo],
      placa: [cliente.placa],
      valorPgt: [cliente.valorPgt],
      dataPgt: [cliente.dataPgt],
    })
  }

  onSubmit() {
    console.log(this.formCliente.value);
    let clientesLocalStorage = localStorage.getItem('clientes')
    console.log(clientesLocalStorage);
    this.clientes = clientesLocalStorage == null ? [] : JSON.parse(clientesLocalStorage)
    console.log(this.clientes)
    this.clientes.push(this.formCliente.value)
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
    this.router.navigate(['']);
  }
}

export class Cliente {
nome!:string;
email!: string;
telefone!:number;
modelo!:string ;
placa!:string ;
valorPgt!: number;
dataPgt!: string;
}

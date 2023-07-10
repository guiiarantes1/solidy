import { Component, Input, OnInit } from '@angular/core';
import { AdicionarUserComponent } from '../adicionar-user/adicionar-user.component';

@Component({
  selector: 'app-gerenciar-user',
  templateUrl: './gerenciar-user.component.html',
  styleUrls: ['./gerenciar-user.component.scss']
})
export class GerenciarUserComponent implements OnInit {

clientes:any=[];

  constructor() { }

  ngOnInit(): void {
    let clientesLocalStorage = localStorage.getItem('clientes')
    console.log(clientesLocalStorage);
    this.clientes = clientesLocalStorage == null ? [] : JSON.parse(clientesLocalStorage)
    console.log(this.clientes)
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }

}

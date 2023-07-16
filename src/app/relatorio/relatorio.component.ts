import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {
  clientes: any = [];
  meses:any = [];

  constructor() { }

  ngOnInit(): void {
    let clientesLocalStorage = localStorage.getItem('clientes');
    this.clientes =
    clientesLocalStorage == null ? [] : JSON.parse(clientesLocalStorage);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));

    this.clientes.sort(function(a:any,b:any) {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
  });

  console.log(this.clientes);

  this.criarMeses()
  console.log(this.meses);

  }

  criarMeses(){
    this.meses.push({sigla:'jan',nome:'janeiro', qntAdesao: '3', valorAdesao: '2355', valorBoni:'', valorTotal: ''},
    {sigla:'fev',nome:'fevereiro', qntAdesao: '', valorAdesao: '', valorBoni:'', valorTotal: ''},
    {sigla:'mar',nome:'março', qntAdesao: '', valorAdesao: '', valorBoni:'', valorTotal: ''},
    {sigla:'abr',nome:'abril', qntAdesao: '', valorAdesao: '', valorBoni:'', valorTotal: ''},
    {sigla:'mai',nome:'maio', qntAdesao: '', valorAdesao: '', valorBoni:'', valorTotal: ''},
    {sigla:'jun',nome:'junho', qntAdesao: '', valorAdesao: '', valorBoni:'', valorTotal: ''},
    {sigla:'jul',nome:'julho', qntAdesao: '', valorAdesao: '', valorBoni:'', valorTotal: ''},
    {sigla:'ago',nome:'agosto', qntAdesao: '', valorAdesao: '', valorBoni:'', valorTotal: ''},
    {sigla:'set',nome:'setembro', qntAdesao: '', valorAdesao: '', valorBoni:'', valorTotal: ''},
    {sigla:'out',nome:'outubro', qntAdesao: '', valorAdesao: '', valorBoni:'', valorTotal: ''},
    {sigla:'nov',nome:'novembro', qntAdesao: '', valorAdesao: '', valorBoni:'', valorTotal: ''},
    {sigla:'dez',nome:'dezembro', qntAdesao: '', valorAdesao: '', valorBoni:'', valorTotal: ''})};
}

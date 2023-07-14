import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {
  dataAtual: Date = new Date();
  diasCalendario: Date[] = [];
  clientes: any = [];
  id!: any;
  diaSelecionado:any;
  dataSelecionada!:any;
  clientesDia:any = [];
  diaPgt!:boolean;
  diaAtual: Date = new Date();;
  mesAtual!:any;
  anoAtual!:any;
  dataLocal:any;
  datasReceber:any =[];

  constructor() { }

  ngOnInit(): void {

    this.construirCalendario();
    let clientesLocalStorage = localStorage.getItem('clientes');
    this.clientes =
    clientesLocalStorage == null ? [] : JSON.parse(clientesLocalStorage);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
    this.clientes.sort(function(a:any,b:any) {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
  });
  console.log(this.diasCalendario)
  this.verificarDiasPgt()
  this.verificarDiaAtual()


  }
  construirCalendario() {
    const ano = this.dataAtual.getFullYear();
    const mes = this.dataAtual.getMonth();

    const primeiroDiaDaSemana = 0; // domingo
    const ultimoDiaDaSemana = 6; // sábado

    // Vai subtraindo -1 até chegarmos no primeiro dia da semana
    const dataInicial = new Date(ano, mes, 1);
    while (dataInicial.getDay() !== primeiroDiaDaSemana) {
      dataInicial.setDate(dataInicial.getDate() - 1);
    }

    // Vai somando +1 até chegarmos no último dia da semana
    const dataFinal = new Date(ano, mes + 1, 0);
    while (dataFinal.getDay() !== ultimoDiaDaSemana) {
      dataFinal.setDate(dataFinal.getDate() + 1);
    }

    this.diasCalendario = [];
    for (
      let data = new Date(dataInicial.getTime());
      data <= dataFinal;
      data.setDate(data.getDate() + 1)
    ) {
      this.diasCalendario.push(new Date(data.getTime()));
    }
  }

  alterarMes(offsetMes: number) {
      this.dataAtual.setMonth(this.dataAtual.getMonth() + offsetMes);
      this.dataAtual = new Date(this.dataAtual.getTime());
      this.construirCalendario();
      console.log(this.dataAtual)
  }

  getId(index: any) {
    this.id =this.diasCalendario[index].getDate();
    this.dataSelecionada = this.diasCalendario[index].getFullYear() + '-' + '0'+(this.diasCalendario[index].getMonth()+1)
    + '-' + this.diasCalendario[index].getDate();
    this.dataSelecionada.toString()
    this.diaSelecionado = this.id;
    this.clientesDia = this.clientes.filter((cliente:any) => cliente.dataPgt == this.dataSelecionada)
    console.log(this.clientesDia)
    console.log(this.dataSelecionada)
  }

  verificarDiasPgt(){
    console.log(this.clientes[0].dataPgt )
    console.log(this.datasReceber)
    console.log(typeof this.datasReceber)
    console.log(this.diasCalendario[20])
  }

  verificarDiaAtual(){
    this.diaAtual.setHours(0);
    this.diaAtual.setMinutes(0);
    this.diaAtual.setSeconds(0);
    }
}

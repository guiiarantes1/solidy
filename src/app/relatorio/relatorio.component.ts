import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss'],
})
export class RelatorioComponent implements OnInit {
  clientes: any = [];
  barChartData: any;
  barChartOptions: any;
  labels: any;
  valores: any = [];
  tabela:any;
  constructor() {}

  ngOnInit(): void {
    this.valores = [65, 59, 65, 59,65, 59, 80, 81, 56, 65, 59,65, 59, 80, 81, 56, 65, 59];
    this.tabela = document.querySelector('.tabela');

    this.labels = months({ count: this.valores.length });
    this.barChartData = {
      labels: this.labels,
      datasets: [
        {
          label: 'Valor Mensal',
          data: this.valores,
          backgroundColor: ['rgba(54, 162, 235, 0.8)'],
          borderColor: ['rgb(54, 162, 235)'],
          borderWidth: 1,

        },
      ],
    };

    this.barChartOptions = {
      maintainAspectRatio:false,
      plugins: {
        legend: {
            display: false,
         } } ,

      scales: {


        y: {
          beginAtZero: true,
        },

      },
    };

    let clientesLocalStorage = localStorage.getItem('clientes');
    this.clientes =
      clientesLocalStorage == null ? [] : JSON.parse(clientesLocalStorage);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));

    this.clientes.sort(function (a: any, b: any) {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    });

    console.log(this.clientes);

    if(this.valores.length > 12){
      const newWidth = 550 + ((this.valores.length -12) * 40);
      this.tabela.style.width = `${newWidth}px`
    }
  }
}

const MONTHS = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

export function months(config: any) {
  var cfg = config || {};
  var count = cfg.count || 12;
  var section = cfg.section;
  var values = [];
  var i, value;

  for (i = 0; i < count; ++i) {
    value = MONTHS[Math.ceil(i) % 12];
    values.push(value.substring(0, section));
  }

  return values;
}

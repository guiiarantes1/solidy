import { HomeComponent } from './home/home.component';
import { AdicionarUserComponent } from './adicionar-user/adicionar-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciarUserComponent } from './gerenciar-user/gerenciar-user.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { RelatorioComponent } from './relatorio/relatorio.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'add', component: AdicionarUserComponent},
  { path: 'users', component: GerenciarUserComponent},
  { path: 'calendario', component: CalendarioComponent},
  { path: 'relatorio', component: RelatorioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

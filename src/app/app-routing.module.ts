import { HomeComponent } from './home/home.component';
import { AdicionarUserComponent } from './adicionar-user/adicionar-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciarUserComponent } from './gerenciar-user/gerenciar-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'add', component: AdicionarUserComponent},
  { path: 'users', component: GerenciarUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaGastoComponent } from './components/gasto/lista-gasto/lista-gasto.component';
import { RegistroGastoComponent } from './components/gasto/registro-gasto/registro-gasto.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'gastos', component: ListaGastoComponent },
  { path: 'gastos/form', component: RegistroGastoComponent },
  { path: 'gastos/form/:id', component: RegistroGastoComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

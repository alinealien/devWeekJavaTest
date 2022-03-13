import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Aqui faz a conexao/redirecionamento a pagina examas.html (que esta em outro modulo)
const routes: Routes = [
  {
    path:'', pathMatch: 'full', redirectTo:'exames'
  },
  {
    path: 'exames',
    loadChildren: () => import('./exames/exames.module').then(m => m.ExamesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

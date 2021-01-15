import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos/alunos.component';
import { CursosComponent } from './cursos/cursos.component';
import { KeyValueComponent } from './key-value/key-value.component';

const routes: Routes = [
  {path: 'keyvalue', component: KeyValueComponent },
  {path: 'cursos', component: CursosComponent },
  {path: 'alunos', component: AlunosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

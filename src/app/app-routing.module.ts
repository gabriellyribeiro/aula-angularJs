import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CorpoComponent } from './corpo/corpo.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { PostIdComponent } from './post-id/post-id.component';
import { RodapeComponent } from './rodape/rodape.component';


const routes: Routes = [
  { path: '', redirectTo: 'corpo', pathMatch: 'full' },
  { path: 'corpo', component: CorpoComponent },
  { path: 'conteudo', component: ConteudoComponent },
  { path: 'post-id', component: PostIdComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

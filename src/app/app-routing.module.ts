import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditContenidoComponent } from '../app/component/edit-contenido/edit-contenido.component'; 

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'Item', component: EditContenidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

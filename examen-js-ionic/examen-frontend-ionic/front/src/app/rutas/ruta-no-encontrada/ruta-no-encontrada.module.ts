import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RutaNoEncontradaPage } from './ruta-no-encontrada.page';

const routes: Routes = [
  {
    path: '',
    component: RutaNoEncontradaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RutaNoEncontradaPage]
})
export class RutaNoEncontradaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistroEntrenadorPage } from './registro-entrenador.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroEntrenadorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistroEntrenadorPage]
})
export class RegistroEntrenadorPageModule {}

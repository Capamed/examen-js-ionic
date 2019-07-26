import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: './rutas/login/login.module#LoginPageModule' },
  { path: 'registrar', loadChildren: './rutas/registrar/registrar.module#RegistrarPageModule' },
  { path: 'tab', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'registro-entrenador/:idCajero', loadChildren: './rutas/registro-entrenador/registro-entrenador.module#RegistroEntrenadorPageModule' },
  { path: 'pokemon/:idCajero/:idEntrenador', loadChildren: './pokemon/pokemon.module#PokemonPageModule' },
  { path: 'registro-pokemon/:idCajero/:idEntrenador', loadChildren: './rutas/registro-pokemon/registro-pokemon.module#RegistroPokemonPageModule' },
  { path:'', redirectTo:'/login', pathMatch:'full'},
  { path: '**', loadChildren: './rutas/ruta-no-encontrada/ruta-no-encontrada.module#RutaNoEncontradaPageModule' },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

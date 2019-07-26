import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CajeroHttpService } from '../servicios/cajero-http.service';
import { EntrenadorHttpService } from '../servicios/entrenador-http.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  idEntrenador;
  idCajero;
  rutaCrearPokemon;
  arregloPokemons = [];

  constructor(private readonly _activatedRoute:ActivatedRoute,
    private readonly _router:Router, 
    private readonly _cajeroHttpService:CajeroHttpService,
    private readonly _entrenadorHttpService:EntrenadorHttpService) { }

  ngOnInit() {
    const parametros$ = this._activatedRoute.params;
      parametros$
      .subscribe(
        (parametros)=>{
          this.idEntrenador = parametros.idEntrenador;
          this.idCajero = parametros.idCajero;
          this.rutaCrearPokemon = ['/registro-pokemon',this.idCajero,this.idEntrenador];
          const respuestaEntrenador$ = this._entrenadorHttpService.buscarPorId(this.idEntrenador);
          respuestaEntrenador$
          .subscribe(
            (datos)=>{
              this.arregloPokemons = datos.arregloPokemons;
            }
          ); 
        }
      )
  }



}

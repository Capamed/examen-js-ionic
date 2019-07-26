import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CajeroHttpService } from 'src/app/servicios/cajero-http.service';
import { EntrenadorHttpService } from 'src/app/servicios/entrenador-http.service';
import { PokemonHttpService } from 'src/app/servicios/pokemon-http.service';

@Component({
  selector: 'app-registro-pokemon',
  templateUrl: './registro-pokemon.page.html',
  styleUrls: ['./registro-pokemon.page.scss'],
})
export class RegistroPokemonPage implements OnInit {

  idEntrenador;
  idCajero;
  rutaMenuPokemon;

  constructor(private readonly _activatedRoute:ActivatedRoute,
    private readonly _pokemonHttpService:PokemonHttpService) { }

  ngOnInit() {
    const parametros$ = this._activatedRoute.params;
      parametros$
      .subscribe(
        (parametros)=>{
          this.idEntrenador = parametros.idEntrenador;
          this.idCajero = parametros.idCajero;
          this.rutaMenuPokemon = ['/pokemon',this.idCajero,this.idEntrenador];
        }
      )
  }

  registrarPokemon(formulario){
    const nombrePokemon = formulario.controls.nombrepokemon.value; 
    const poderPokemon = formulario.controls.poderpokemon.value;
    const fechaCapturaPokemon = formulario.controls.fechacapturapokemon.value;
    const nivelPokemon = formulario.controls.nivelpokemon.value;
    const costoPokemon = formulario.controls.costopokemon.value;
    const pokemon = {
      nombre: nombrePokemon,
      poderEspecial: poderPokemon,
      fechaCaptura: fechaCapturaPokemon,
      nivel: nivelPokemon,
      costo: costoPokemon,
      fkEntrenador: this.idEntrenador 
    };

    const respuestaPokemon$ = this._pokemonHttpService.crear(pokemon);
    respuestaPokemon$
    .subscribe(
      (datos)=>{
        console.log(datos);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  

}

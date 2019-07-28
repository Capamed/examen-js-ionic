import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CajeroHttpService } from '../servicios/cajero-http.service';
import { EntrenadorHttpService } from '../servicios/entrenador-http.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  idCajero;
  rutaTab2;
  rutaCrearEntrenador;
  arregloEntrenadores = [];

  constructor(
    private readonly _activatedRoute:ActivatedRoute,
    private readonly _router:Router, 
    private readonly _cajeroHttpService:CajeroHttpService,
    private readonly _entrenadorHttpService:EntrenadorHttpService) {}

    
    
    ngOnInit() {
      const parametros$ = this._activatedRoute.params;
      parametros$
      .subscribe(
        (parametros)=>{
          this.idCajero = parametros.idCajero;
          this.rutaCrearEntrenador = ['/registro-entrenador',this.idCajero];
          const respuestaCajero$ = this._cajeroHttpService.buscarPorId(this.idCajero);
          respuestaCajero$
          .subscribe(
            (datos)=>{
              this.arregloEntrenadores = datos.arregloEntrenadores;
            }
          ); 
        }
      )
    }

    eliminarEntrenador(idEntrenador){
      const respuestaEliminarEntrenador$ = this._entrenadorHttpService.eliminarPorId(idEntrenador);
      respuestaEliminarEntrenador$
      .subscribe(
        (datos)=>{
          this.mostrarDatosTabla();
        }
      );
    }

    mostrarDatosTabla(){
      const respuestaCajero$ = this._cajeroHttpService.buscarPorId(this.idCajero);
          respuestaCajero$
          .subscribe(
            (datos)=>{
              this.arregloEntrenadores = datos.arregloEntrenadores;
            }
          ); 
    }

    buscarEntrenador(formulario){
      const nombreABuscar = formulario.controls.nombrebuscarentrenador.value;
    }
}

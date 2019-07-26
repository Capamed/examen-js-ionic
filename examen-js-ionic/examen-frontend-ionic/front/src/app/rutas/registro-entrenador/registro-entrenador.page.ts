import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EntrenadorHttpService } from 'src/app/servicios/entrenador-http.service';

@Component({
  selector: 'app-registro-entrenador',
  templateUrl: './registro-entrenador.page.html',
  styleUrls: ['./registro-entrenador.page.scss'],
})
export class RegistroEntrenadorPage implements OnInit {

  idCajero;
  rutaMenuTab1;
  constructor(private readonly _router:Router,
              private readonly _activatedRoute:ActivatedRoute,
              private readonly _entrenadorHttpService:EntrenadorHttpService) { }

  ngOnInit() {
    const parametros$ = this._activatedRoute.params;
  
    parametros$
    .subscribe(
      (parametros)=>{
        this.idCajero = parametros.idCajero;
        this.rutaMenuTab1 = ['/tab','tabs',this.idCajero,'tab1',this.idCajero];
      }
    )
  
  }

  registrarEntrenador(formulario){
    const nombreEntrenador = formulario.controls.nombreentrenador.value;
    const apellidoEntrenador = formulario.controls.apellidoentrenador.value
    const fechaNacimientoEntrenador =  formulario.controls.fechanacimientoentrenador.value;
    const medallasEntrenador = formulario.controls.medallasentrenador.value;
    const campeonEntrenador = formulario.controls.campeonentrenador.value;

    const entrenador ={
      nombre: nombreEntrenador,
      apellido: apellidoEntrenador,
      fechaNacimiento: fechaNacimientoEntrenador,
      medallas: medallasEntrenador,
      campeonActual: campeonEntrenador,
      fkCajero: this.idCajero
    }

    const respuestaEntrenador$ = this._entrenadorHttpService.crear(entrenador); 

    respuestaEntrenador$
    .subscribe(
      (datos)=>{
        console.log(datos);
      },
      (error)=>{
        console.log(error);
      }
    )

  }



}

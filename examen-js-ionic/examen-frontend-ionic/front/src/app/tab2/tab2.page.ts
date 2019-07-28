import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CajeroHttpService } from '../servicios/cajero-http.service';
import { EntrenadorHttpService } from '../servicios/entrenador-http.service';
import { CarritoService } from '../servicios/carrito-service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  idCajero;
  arregloEntrenadores;
  arregloPokemonsPorEntrenador;
  mostrar = false;
  nombreCajero;
  arregloComprarEntrenadores=[];
  arregloPokemonsCosto=[];
  costoTotal=0;

  constructor(private readonly _activatedRoute:ActivatedRoute,
    private readonly _router:Router, 
    private readonly _cajeroHttpService:CajeroHttpService,
    private readonly _entrenadorHttpService:EntrenadorHttpService,
    private readonly _carritoService:CarritoService,public toastController: ToastController) {}

  ngOnInit(){
    const parametros$ = this._activatedRoute.params;
      parametros$
      .subscribe(
        (parametros)=>{
          this.idCajero = parametros.idCajero;
          const respuestaCajero$ = this._cajeroHttpService.buscarPorId(this.idCajero);
          respuestaCajero$
          .subscribe(
            (datos)=>{
              this.nombreCajero = datos.nombre;
              this.arregloEntrenadores = datos.arregloEntrenadores;
            }
          ); 
        }
      )
  }

  verPokemons(idEntrenador){
    const respuestaPokemons$ = this._entrenadorHttpService.buscarPorId(idEntrenador);
    respuestaPokemons$
    .subscribe(
      (datos)=>{
        this.arregloPokemonsPorEntrenador = datos.arregloPokemons;
        this.mostrar = true;
      }
    ); 
  }

  comprarEntrenador(nombreEntrenadorNuevo,idEntrenadorNuevo){
    const respuestaPokemons$ = this._entrenadorHttpService.buscarPorId(idEntrenadorNuevo);
    respuestaPokemons$
    .subscribe(
      (datos)=>{
        this.arregloPokemonsCosto = datos.arregloPokemons;
        this.arregloPokemonsCosto.forEach(
          (valor)=>{
            this.costoTotal += valor.costo;
          }
        );
        console.log(this.costoTotal);
      }
    ); 

    const itemNuevo = {
      idEntrenador: idEntrenadorNuevo,
      nombreEntrenador: nombreEntrenadorNuevo,
    };
    this.arregloComprarEntrenadores = this._carritoService.agregarCarritoDeCompras(itemNuevo);
  }


  eliminarEntrenador(nombreEntrenadorQuitar,idEntrenadorQuitar){
    const respuestaPokemons$ = this._entrenadorHttpService.buscarPorId(idEntrenadorQuitar);
    respuestaPokemons$
    .subscribe(
      (datos)=>{
        this.arregloPokemonsCosto = datos.arregloPokemons;
        this.arregloPokemonsCosto.forEach(
          (valor)=>{
            this.costoTotal -= valor.costo;
          }
        );
        console.log(this.costoTotal);
      }
    ); 
    const itemQuitar = {
      idEntrenador: idEntrenadorQuitar,
      nombreEntrenador: nombreEntrenadorQuitar,
    }
    this._carritoService.eliminarDelCarrito(itemQuitar);

  }

  registrarFactura(formulario){
    const nombreCliente = formulario.controls.nombrefactura.value;
    const facturaTotal = {
      nombreCajero: this.nombreCajero,
      nombreClienteFactura: nombreCliente,
      total: this.costoTotal,
    }
    this._carritoService.guardarFacturas(facturaTotal);
    this.presentToast();

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se registro su factura con éxito',
      duration: 2000,
      position: 'middle',
      color: 'success'
    });
    toast.present();
  }
}

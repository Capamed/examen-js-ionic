import { Injectable } from "@angular/core";
import { ItemCarritoCompras } from '../dto/carrito';

@Injectable()

export class CarritoService {

    constructor() { }
  
    carritoCompras:ItemCarritoCompras[]=[];
    arregloFacturas = [];

      
      agregarCarritoDeCompras(arreglo){
          const identificador = arreglo.nombreEntrenador;
          let indiceItem = -1;
          const existeElItem = this.carritoCompras.some(
              (item, indice)=>{
                  if(item.nombreEntrenador == identificador){
                      indiceItem = indice;
                      return true;
                  }else{
                      return false;
                  }
                  
              }
          )
          if(existeElItem){
              this.anadirAlContador(indiceItem);
             
          }else{
              this.anadirAlCarrito(arreglo);
          }
          console.log('Se añadio al carrito',arreglo);
          return this.carritoCompras;
      }
  
      private anadirAlContador(indice){
          this.carritoCompras[indice].cantidad++;
      }
      private anadirAlCarrito(item){
          item.cantidad = 1;
          this.carritoCompras.splice(0,0,item);
      }
      
      eliminarDelCarrito(arreglo){
          const identificador = arreglo.nombreEntrenador;
          let indiceItem = -1;
          const existeElItem = this.carritoCompras.some(
              (item, indice)=>{
                  if(item.nombreEntrenador == identificador){
                      indiceItem = indice;
                      return true;
                  }
              }
          )
          if(existeElItem){
              this.quitarContador(indiceItem);  
          }
          console.log('Se añadio al carrito',arreglo);
          return this.carritoCompras;
      }
  
      private quitarContador(indice){
          this.carritoCompras[indice].cantidad--;
          if(this.carritoCompras[indice].cantidad === 0){
              this.carritoCompras.splice(indice,1);
          }
      }

      guardarFacturas(arregloFactura){
        console.log('AQUI');
        this.arregloFacturas.push(arregloFactura);
        console.log('facturas',this.arregloFacturas);
      }
  }
  
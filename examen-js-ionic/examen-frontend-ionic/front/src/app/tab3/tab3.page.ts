import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../servicios/carrito-service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  arregloFacturas;
  arregloFilter=[];
  esconder = true;
  constructor(private readonly _carritoService:CarritoService) {}

  ngOnInit() {
    this.arregloFacturas = this._carritoService.arregloFacturas;
  }


  buscarFactura(formulario){
    const nombreABuscar = formulario.controls.nombrebuscarfactura.value;
    if(nombreABuscar === '' ){    
      this.mostrarDatos();
    }else{
      this.esconder=false;
      const respuestaFilter = this.arregloFacturas.filter(
        (valor)=>{
            console.log(valor);
            return valor.nombreCajero === nombreABuscar || valor.nombreClienteFactura === nombreABuscar;
          }
      );
      this.arregloFilter = respuestaFilter;
      //console.log('repuesaFIND',respuestaFilter);
    }
  }

  mostrarDatos(){
    this.arregloFacturas = this._carritoService.arregloFacturas;
    this.esconder = true;
  }


}

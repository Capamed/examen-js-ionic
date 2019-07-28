import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../servicios/carrito-service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  arregloFacturas

  constructor(private readonly _carritoService:CarritoService) {}

  ngOnInit() {
    this.arregloFacturas = this._carritoService.arregloFacturas;
  }


}

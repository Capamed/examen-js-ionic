import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CajeroHttpService } from 'src/app/servicios/cajero-http.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  constructor(public toastController: ToastController,
    private readonly cajeroHttpService:CajeroHttpService,
    private readonly _router:Router) { }

  ngOnInit() {
  }


  guardarCajero(formulario){
    const nombreCajeroNuevo = formulario.controls.nombrecajero.value;
    const nuevoCajero ={
      nombre: nombreCajeroNuevo,
    }
    const respuestaCajero$ = this.cajeroHttpService.crear(nuevoCajero);
    respuestaCajero$
    .subscribe(
      (datos)=>{
        this.presentToast();
      }
    );
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se registro con exito el cajero',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }

}

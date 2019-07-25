import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CajeroHttpService } from 'src/app/servicios/cajero-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombreCajero;
  constructor(public toastController: ToastController,
              private readonly cajeroHttpService:CajeroHttpService,
              private readonly _router:Router) { }

  ngOnInit() {
  }

  login(formulario){
    this.nombreCajero = formulario.controls.nombrecajero.value;
    if(this.nombreCajero){
      const respuestaCajero$ = this.cajeroHttpService.buscarPorNombre(this.nombreCajero);
      respuestaCajero$
      .subscribe(
        (datos)=>{
          if(datos === false){
            const url = ['/registrar'];
            this._router.navigate(url);
          }else{
            const idCajero = datos[0].id;
            const url = ['/tab',idCajero,'tabs','tab1',idCajero];
            this._router.navigate(url);
          }
        },
        (error)=>{
          console.log(error);
        }
      );
    }else{
      this.presentToast();
    }
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Ingrese un nombre por favor',
      duration: 2000,
      position: 'top',
      color: 'warning'
    });
    toast.present();
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  idCajero;
  url;
  rutaTab1;
  rutaTab2;
  rutaTab3;

  constructor( private readonly _activatedRoute:ActivatedRoute,
                private readonly _router:Router) { }

  ngOnInit() {
    const parametros$ = this._activatedRoute.params;
    parametros$
    .subscribe(
      (parametros)=>{
        console.log('saSA',parametros);
        this.idCajero = parametros.idCajero;
        this.rutaTab1 = ['/tab','tabs',this.idCajero,'tab1',this.idCajero];
        this.rutaTab2 = ['/tab','tabs',this.idCajero,'tab2',this.idCajero];
        this.rutaTab3 = ['/tab','tabs',this.idCajero,'tab3',this.idCajero];
      }
    )
  }
  

  id(){
    console.log('entro a id ');
    console.log('id',this.idCajero);
    const url = ['/tab','tabs','tab2',this.idCajero];
    console.log(url);
    this._router.navigate(url);
  }
}

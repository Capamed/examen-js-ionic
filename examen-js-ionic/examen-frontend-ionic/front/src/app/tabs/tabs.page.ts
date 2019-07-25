import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  idCajero;
  constructor( private readonly _activatedRoute:ActivatedRoute,
                private readonly _router:Router) { }

  ngOnInit() {
    const parametros$ = this._activatedRoute.params;
    parametros$
    .subscribe(
      (parametros)=>{
        this.idCajero = parametros.idCajero;
      }
    )
  }
}

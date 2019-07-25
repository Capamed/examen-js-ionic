import { Injectable } from "@angular/core";
import { HttpSailsPrincipal } from './http-sails.principal';
import { Cajero } from '../dto/cajero';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()

export class CajeroHttpService extends HttpSailsPrincipal<Cajero>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient,environment.url,'/Cajero');
    }

    buscarPorNombre(nombre){
        console.log("Cajero", nombre);
        const url = `${this.url}/AutenticarCajero/${nombre}`;
        return this._httpClient.get(url);
    }
}
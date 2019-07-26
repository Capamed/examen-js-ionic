import { Injectable } from "@angular/core";
import { HttpSailsPrincipal } from './http-sails.principal';
import { Entrenador } from '../dto/entrenador';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()

export class EntrenadorHttpService extends HttpSailsPrincipal <Entrenador>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient,environment.url,'/Entrenador');
    }
}
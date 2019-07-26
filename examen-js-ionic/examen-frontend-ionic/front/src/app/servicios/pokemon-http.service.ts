import { Injectable } from "@angular/core";
import { HttpSailsPrincipal } from './http-sails.principal';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../dto/pokemon';


@Injectable()

export class PokemonHttpService extends HttpSailsPrincipal <Pokemon>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient,environment.url,'/Pokemon');
    }
}
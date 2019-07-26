export interface Entrenador{
    created?:number,
    updatedAt?: number;
    id?: number;
    nombre: string;
    apellido: string;
    fechaNacimiento:string;
    medallas: number;
    campeonActual: boolean;
    fkCajero?:any;
    arregloPokemons?: any[];
}
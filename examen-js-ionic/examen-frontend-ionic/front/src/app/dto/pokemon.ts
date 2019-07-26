export interface Pokemon{
    created?:number,
    updatedAt?: number;
    id?: number;
    nombre: string;
    poderEspecial: string;
    fechaCaptura: string;
    nivel: number;
    costo: boolean;
    fkEntrenador?: any;
}
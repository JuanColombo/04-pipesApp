export enum Color{
    rojo,
    negro,
    azul,
    verde
}

export interface Heroe {
    nombre: String;
    vuela: boolean;
    color: Color
}
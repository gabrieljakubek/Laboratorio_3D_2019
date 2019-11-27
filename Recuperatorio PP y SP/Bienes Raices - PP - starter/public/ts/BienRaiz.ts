/// <reference path="Anuncio.ts" />
class BienRaiz extends Anuncio{
    constructor(id:number, titulo: string, transaccion: string, descripcion: string, precio: number, num_dormitorio: number, num_wc: number, num_estacionamientos: number) {
        super(id,titulo,transaccion,descripcion,precio,num_dormitorio,num_wc,num_estacionamientos);
    }
}
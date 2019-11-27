"use strict";
class Anuncio {
    constructor(id, titulo, transaccion, descripcion, precio, num_dormitorio, num_wc, num_estacionamientos) {
        this._id = id;
        this._titulo = titulo;
        this._transaccion = transaccion;
        this._descripcion = descripcion;
        this._precio = precio;
        this._num_dormitorio = num_dormitorio;
        this._num_wc = num_wc;
        this._num_estacionamiento = num_estacionamientos;
    }
    get id() {
        return this._id;
    }
    set id(e) {
        this._id = e;
    }
    get titulo() {
        return this._titulo;
    }
    set titulo(e) {
        this._titulo = e;
    }
    get transaccion() {
        return this._transaccion;
    }
    set transaccion(v) {
        this._transaccion = v;
    }
    get descripcion() {
        return this._descripcion;
    }
    set descripcion(e) {
        this._descripcion = e;
    }
    get precio() {
        return this._precio;
    }
    set precio(e) {
        this._precio = e;
    }
    get num_dormitorio() {
        return this._num_dormitorio;
    }
    set num_dormitorio(v) {
        this._num_dormitorio = v;
    }
    get num_wc() {
        return this._num_wc;
    }
    set num_wc(v) {
        this._num_wc = v;
    }
    get num_estacionamiento() {
        return this._num_estacionamiento;
    }
    set num_estacionamiento(v) {
        this._num_estacionamiento = v;
    }
}
class BienRaiz extends Anuncio {
    constructor(id, titulo, transaccion, descripcion, precio, num_dormitorio, num_wc, num_estacionamientos) {
        super(id, titulo, transaccion, descripcion, precio, num_dormitorio, num_wc, num_estacionamientos);
    }
}
var ETransaccion;
(function (ETransaccion) {
    ETransaccion[ETransaccion["Alquiler"] = 0] = "Alquiler";
    ETransaccion[ETransaccion["Venta"] = 1] = "Venta";
})(ETransaccion || (ETransaccion = {}));
//# sourceMappingURL=outfile.js.map
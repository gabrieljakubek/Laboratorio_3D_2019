class Anuncio {
    private _id?: number | any;
    private _titulo: string;
    private _transaccion: string;
    private _descripcion: string;
    private _precio: number;
    private _num_dormitorio: number;
    private _num_wc: number;
    private _num_estacionamiento: number;
    constructor(id = 0, titulo: string = "Hola", transaccion: string, descripcion: string, precio: number, num_dormitorio: number, num_wc: number, num_estacionamientos: number) {
        this._id = id;
        this._titulo = titulo;
        this._transaccion = transaccion;
        this._descripcion = descripcion;
        this._precio = precio;
        this._num_dormitorio = num_dormitorio;
        this._num_wc = num_wc;
        this._num_estacionamiento = num_estacionamientos;
    }

    public get id(): number {
        return this._id;
    }

    public set id(e: number) {
        this._id = e;
    }

    public get titulo(): string {
        return this._titulo;
    }

    public set titulo(e: string) {
        this._titulo = e;
    }

    public get transaccion(): string {
        return this._transaccion;
    }

    public set transaccion(v: string) {
        this._transaccion = v;
    }

    public get descripcion(): string {
        return this._descripcion;
    }

    public set descripcion(e: string) {
        this._descripcion = e;
    }

    public get precio(): number {
        return this._precio;
    }

    public set precio(e: number) {
        this._precio = e;
    }


    public get num_dormitorio(): number {
        return this._num_dormitorio;
    }

    public set num_dormitorio(v: number) {
        this._num_dormitorio = v;
    }
    public get num_wc(): number {
        return this._num_wc;
    }

    public set num_wc(v: number) {
        this._num_wc = v;
    }
    public get num_estacionamiento(): number {
        return this._num_estacionamiento;
    }

    public set num_estacionamiento(v: number) {
        this._num_estacionamiento = v;
    }
/* 
    public static generarListado = function (v:[object]) {
        let anuncios  = new Array();
        v.forEach(element => {
            anuncios.push(new Anuncio(element._id,element._titulo,element._transaccion,element._descripcion,element._precio,element._num_dormitorio,element._num_wc,element._num_estacionamiento));
        });
        console.log(anuncios);
    } */
}
import { Component } from '@angular/core';
import { StringifyOptions } from 'querystring';

//DECLARACION DEL COMPONENTE Y SU ESTRUCTURA DE ARCHIVOS, ADEMAS DE SU NOMBRE
@Component({
    //NOMBRE DEL COMPONENTE PARA LA APP
    selector: "app-primercomponente",
    templateUrl: "./primercomponent.component.html"
})
//ESTE NOMBRE ES PARA LA DECLARACION EN MODULE
export class PrimerComponente {
    public nombre: string;
    public anio: number;

    //LA PRIMERA VEZ QUE ENTRAMOS EN EL COMPONENTE
    //TENEMOS UN CONSTRUCCTOR

    constructor() {
        console.log('Creando el primer componente');
        this.nombre = "Alex angular";
        this.anio = 2000;
    }
}

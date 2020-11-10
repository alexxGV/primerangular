import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
    selector: "app-ciclos-vida",
    templateUrl: "./ciclosdevida.component.html"
})

export class CiclosVida implements OnInit, DoCheck {
    public mensaje: string;

    //METODO DE ACCION CON UN BOTON
    cambiarMensaje() {
        this.mensaje = "Mensaje cambiado";
    }

    constructor() {
        console.log("contructo, voy primero");
        this.mensaje = "Mensaje inicial";
    }

    ngOnInit(): void {
        console.log("EJECUTANDO EL METODO ON INIT");

    }

    ngDoCheck() {
        console.log("Estoy en doCheck");

    }
}
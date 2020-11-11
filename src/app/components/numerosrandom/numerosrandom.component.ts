import { Component } from '@angular/core';

@Component({
    selector: "app-numeros-random",
    templateUrl: "./numerosrandom.component.html",
    styleUrls: ["./numerosrandom.component.css"]
})

export class NumerosRandom {
    public numeros: Array<number>;

    constructor() {
        this.numeros = [5, 6, 7, 8, 9, 10];
    }
    generarNumeros() {
        var aleat = Math.floor(Math.random() * 100) + 1;
        this.numeros.push(aleat);
    }
}
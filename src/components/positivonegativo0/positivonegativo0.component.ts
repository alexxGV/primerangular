import { Component } from '@angular/core';

@Component({
    selector: "app-positivo-negativo0",
    templateUrl: "./positivonegativo0.component.html",
    styleUrls: []
})

export class PositivoNegativo0 {
    public numeros: Array<number>;

    constructor() {
        this.numeros = [-1, 1, -2, 2, -3, 3 - 4, 4];
    }
}
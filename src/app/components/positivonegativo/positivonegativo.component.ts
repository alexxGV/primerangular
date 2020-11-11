import { Component } from '@angular/core';

@Component({
    selector: "app-positivo-negativo",
    templateUrl: "./positivonegativo.component.html",
    styleUrls: ["./positivonegativo.component.css"]
})

export class PositivoNegativo {
    public numeros: Array<number>;

    constructor() {
        this.numeros = [-1, 1, -2, 2, -3, 3 - 4, 4];
    }
}
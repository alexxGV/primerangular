import { Component } from '@angular/core';

@Component({
    selector: "app-deportes",
    templateUrl: "./deportes.component.html"
})

export class Deportes {
    public sports: Array<string>;

    constructor() {
        this.sports = ["Futbol", "baloncesto", "rugbi", "petanca", "hipica", "balomnano", "esgrima", "f1"];
    }
}
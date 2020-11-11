import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulariopersona',
  templateUrl: './formulariopersona.component.html',
  styleUrls: ['./formulariopersona.component.css']
})
export class FormulariopersonaComponent implements OnInit {

  //DECLARAMOS UN OBJETO COMO MODELO
  //QUE VAMOS A ENLAZAR CON EL FORMULARIO
  public user: any;
  public mensaje: string;

  constructor() {
    //INICIALIZAMOS EL OBJETO USER (MODEL)
    this.user = {
      nombre: "",
      apellidos: "",
      edad: 0
    };
    this.mensaje = "";

  }

  recibirDatos() {
    this.mensaje = "Datos recibidos";
    console.log(this.user);

  }
  ngOnInit(): void {
  }

}

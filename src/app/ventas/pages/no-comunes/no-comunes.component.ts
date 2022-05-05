import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {
 //i18nSelect
  nombre: string = 'Juan Pablo';
  genero:string = 'masculino';

  invitacionMapa={
    'masculino' : 'invitarlo',
    'femenino'  : 'invitarla'
  }

  //i18Plural
  clientes : string[] = ['Maria','Pedro','Juan Pablo','Ivan','Ramiro','Daiana'];
  clientesMapa={
    '=0' : 'no tenemos ningun cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    'other' : 'tenemos # clientes esperando.',
  }

  cambiarPersona(){
    this.nombre = 'Fernanda',
    this.genero = 'femenino'
  }

  borrarCliente(){
    this.clientes.pop()
  }

  //KeyValue Pipe

  persona={
    nombre: 'Juan Pablo',
    edad: 30,
    direccion: 'San Justo, Santa Fe'
  }

  //JsonPipe
  heroes=[
    {
      nombre:'Superman',
      vuela: true
    },
    { 
      nombre:'Robin',
      vuela: false,
    },
    { 
      nombre:'Aquaman',
      vuela: false,
    }
  ]

  //Asunc Pipe mediante un observable
  miObservable = interval(5000); //0,1,2,3,4,5,....

  //Async mediante una promesa

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout( () => {
      resolve ('Tenemos data de promesa');
    },3500)
  })
  constructor() { }

  ngOnInit(): void {
  }

}

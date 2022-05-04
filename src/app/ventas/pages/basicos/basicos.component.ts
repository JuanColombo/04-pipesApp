import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  nombreLower : string = 'juan pablo'
  nombreUpper : string = 'JUAN PABLO'
  nombreCompleto : string = 'JuAN pAblO'

  fecha :Date = new Date(); //siempre va a ser el dia de hoy

  constructor() { }

  ngOnInit(): void {
  }

}

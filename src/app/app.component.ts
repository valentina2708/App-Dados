import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dados';
  //declar variables
  //declar variables
  numero1= 1;
  numero2=2;
  dadoIzquierda= "../assets/imagenes/dice2.png";
  dadoDerecha="../assets/imagenes/dice1.png";
 

  tirarDados():void{
    this.numero1 = Math.round(Math.random() * 5) +1; // se uso una funcion matematica par redondear los valores
                                                    
    this.numero2=Math.round(Math.random() * 5) +1;
  //para imprimir
  console.log(this.numero1);
  console.log(this.numero2);
  this.dadoIzquierda='../assets/imagenes/dice' +this.numero1+ '.png'; // concatenar
  this.dadoDerecha='../assets/imagenes/dice' +this.numero2+ '.png';
      
  

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'Contador App';
  contador: number = 0;


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  sumar(){
    this.contador++;
  }
  restar(){
    this.contador--;
  }
}



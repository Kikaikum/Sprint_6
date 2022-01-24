import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {
  @Input("frases")
  
  
  frases:{
    frase: string,
    valor: boolean
  }[]=[];
  
  currentSentence=0;
  
  increment(){
    if(this.currentSentence<3){
      this.frases[this.currentSentence].valor=false;
      this.currentSentence ++;
      this.frases[this.currentSentence].valor=true;
    }
  }
  decrement(){
    if(this.currentSentence>0){
      this.frases[this.currentSentence].valor=false;
      this.currentSentence--;
      this.frases[this.currentSentence].valor=true;
    }

  }
  constructor() { }

  ngOnInit(): void {
  }

}

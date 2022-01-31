import { Component,Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {
  @Input("frases")  
  frases:{
    frase: string,
    valor: boolean,
    src:string
  }[]=[];
  
  currentSentence=0;
  src:string="/assets/img/2.jpg";
  @Output() messageEvent = new EventEmitter<string>();

  next(){
    
    if(this.currentSentence<3){      
      this.frases[this.currentSentence].valor=false;
      this.currentSentence ++;
      this.frases[this.currentSentence].valor=true;
      this.src=this.frases[this.currentSentence].src;
      this.messageEvent.emit(this.src);
    }
  }
  prev(){
    if(this.currentSentence>0){
      
      this.frases[this.currentSentence].valor=false;
      this.currentSentence--;
      this.frases[this.currentSentence].valor=true;
      this.src=this.frases[this.currentSentence].src;
      this.messageEvent.emit(this.src);
    }
  }
  
  
 


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import frases from '../frases.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @Output() srcEvent = new EventEmitter<string>();
  frases=frases.frases;
  emepzarVar=false;
  num=1;
  emepzar(){
    this.emepzarVar=true;
  }
  
  src:string="/assets/img/1.jpg";
  receiveMessage($event:string) {
    this.src = $event
    this.srcEvent.emit(this.src);
  }
  
  constructor() { }
  
  ngOnInit(): void {
  }

}

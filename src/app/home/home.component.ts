import { Component, OnInit } from '@angular/core';

import frases from '../frases.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  frases=frases.frases;

  constructor() { }
  
  ngOnInit(): void {
  }

}

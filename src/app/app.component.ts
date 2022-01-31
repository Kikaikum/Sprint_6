import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sprint_6';
  src:string="/assets/img/1.jpg";
  receiveSrc($event:string) {
    this.src = $event
    
  }
}

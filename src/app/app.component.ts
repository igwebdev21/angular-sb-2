import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular' + VERSION.major;

  constructor(){
    const numbers: string[]=['one', 'two', 'three'];
    numbers.forEach(number => console.log(number));
  }
}

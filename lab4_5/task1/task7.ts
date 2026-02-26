import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="greet()"></button> 
    <section (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
  `, // bind event handler to the template event(in this case mouseover/click)
})
export class App {
  greet(){ // Event handler
    console.log("Hello, there");
  }
  message = '';

  showSecretMessage() { // Event handler
    this.message= "Way to go";
  }
}

// Child
import {Component, output} from '@angular/core';

@Component({
  selector: 'app-child',
  styles: `
    .btn {
      padding: 5px;
    }
  `,
  template: ` <button class="btn" (click)="addItem()">Add Item</button> `,
})
export class Child {
  addItemEvent = output<string>(); // output defines the property of variable to send events from child to parent
  addItem() {
    this.addItemEvent.emit("turtle"); // Method emit calls the sending of event to the parent component. In this case, new event generates(which has name addItemEvent), then sends to parent component
    
  }
}

// App
import {Component} from '@angular/core';
import {Child} from './child';

@Component({
  selector: 'app-root',
  template: `
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>
  `, // (addItemEvent) waits for the generation of AddItemEvent, then calls addItem() event handler with $event parameter which is "Turtle" value that had sent through emit()
  imports: [Child],
})
export class App {
  items = new Array();

  addItem(item: string) { // adds turtle in array
    this.items.push(item);
  }
}


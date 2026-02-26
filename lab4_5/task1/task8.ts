// User - child
import {Component, input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` <p>The user's name is {{ name() }}</p> `, // After changing a field
})
export class User {
  readonly name = input<string>(); // input defines property of variable to send event from parent to child. In this case, field(of a User class) takes data from parent. Input is used in App component(parent)
}



// App - parent
import {Component} from '@angular/core';
import {User} from './user'; // import User class(and all fields and methods from it)

@Component({
  selector: 'app-root',
  template: ` <app-user name="Simran" /> `, // Access to a field inside a component "app-user"
  imports: [User],
})
export class App {}
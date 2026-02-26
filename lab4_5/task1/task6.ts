import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.css'],
  template: ` <div [contentEditable]="isEditable"></div> `, // binding attribute "contentEditable" with the property "isEditable"
})
export class App {
  isEditable = true;
}

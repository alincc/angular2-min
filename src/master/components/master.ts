import { Component } from 'angular2/core';

@Component({
  selector: 'master',
  template: `
    <div>It works!</div>
	
	Sample two-way binding:
	<input [(ngModel)]="inputField"/>
	
	<div *ngIf="inputField">{{inputField}}</div>
   `
})

export class Master {
  inputField: any;

  constructor() {
    this.inputField = "Hello";
  }
}

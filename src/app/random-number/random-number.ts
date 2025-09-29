import { Component } from '@angular/core';
import { randomInt } from 'crypto';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-random-number',
  imports: [FormsModule],
  template: `
    <div class="random">
      <h4 class="text-center p-4">Random Number</h4>
      <h3 >Random number: {{result}}</h3>
      <div class="border align-items-center item-center p-4">
        <p>Enter the Limit to Generate Random Number</p>
        <br>
        <input type="number" placeholder="Lower Limit" [(ngModel)]="lowerLimit">
        <br><br>
        <input type="number" placeholder="Upper Limit" [(ngModel)]="upperLimit">
        <br><br>
        <button class="btn btn-primary m-2" (click)="generate()">Generate</button>
        <button class="btn btn-danger m-2" (click)="clear()">Clear</button>
      </div>
    </div>
  `,
  styleUrl: './random-number.css'
})
export class RandomNumber {
  upperLimit = 0;
  lowerLimit = 0;
  result = 0;
  generate() {
  this.result = Math.floor(Math.random() * (this.upperLimit - this.lowerLimit + 1)) + this.lowerLimit;
}

  clear(){
    this.upperLimit = 0;
    this.lowerLimit = 0;
    this.result = 0;
  }
}

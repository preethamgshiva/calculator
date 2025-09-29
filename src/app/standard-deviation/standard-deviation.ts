import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-standard-deviation',
  imports: [FormsModule],
  template:`
    <h4 class="text-center p-4">Standard Deviation Calculator</h4>
    <div class="container text-center">
      <input type="text" class="w-50 m-2 fs-4" placeholder="Enter a list of numbers" [(ngModel)]="arr">
      <button class="btn btn-primary m-2" (click)="calculate()">Calculate</button>
    </div>
    <div class="container text-center">
      <h3 class="text-center p-4">Output: {{result}}</h3>
    </div>
  `,
  styleUrl: './standard-deviation.css'
})
export class StandardDeviation {
    result = 0;
    arr = '';
    meanArr = 0;
    conArr : number[] = [];
    calculate() {
      this.conArr = this.arr.split(',').map(Number);
      this.meanArr = this.conArr.reduce((a, b) => a + b, 0) / this.conArr.length;
      this.result = Math.sqrt(this.conArr.reduce((a, b) => a + Math.pow(b - this.meanArr, 2), 0) / this.conArr.length);
    }
}

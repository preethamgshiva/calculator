import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fraction-calculator',
  standalone: true,
  imports: [ FormsModule],
  template: `
    <h3 class="p-4 text-center">Fraction Calculator</h3>
    <hr>
    <div class="calculator-container d-flex align-items-center justify-content-center gap-3 p-4">
      <div class="fraction d-flex flex-column align-items-center">
        <input class="input-box mb-1 text-center" type="number" placeholder="numerator" [(ngModel)]="num1" >
        <div class="fraction-line mb-1"></div>
        <input class="input-box text-center" type="number" placeholder="denominator" [(ngModel)]="den1">
      </div>

      <div class="operator-select">
        <select name="operator" class="form-select text-center" [(ngModel)]="operator">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>

      <div class="fraction d-flex flex-column align-items-center">
        <input class="input-box mb-1 text-center" type="number" placeholder="numerator" [(ngModel)]="num2">
        <div class="fraction-line mb-1"></div>
        <input class="input-box text-center" type="number" placeholder="denominator" [(ngModel)]="den2">
      </div>
    </div>


    <div class="d-flex flex-column align-items-center pt-4">
      <button class="btn btn-primary" (click)="calculate()">Calculate</button>
      <br>
      <h3>Result</h3>
      <textarea name="result" id="">{{result}}</textarea>
    </div>
  `,
  styleUrls: ['./fraction-calculator.css']
})
export class FractionCalculator {
  num1: number = 0;
  den1: number =0;
  operator = ''
  num2: number = 0;
  den2: number = 0;
  result = 0;

  calculate() {
    if (this.operator === '+') {
      this.result = (this.num1 * this.den2 + this.num2 * this.den1) / (this.den1 * this.den2);
    } else if (this.operator === '-') {
      this.result = (this.num1 * this.den2 - this.num2 * this.den1) / (this.den1 * this.den2);
    } else if (this.operator === '*') {
      this.result = (this.num1 * this.num2) / (this.den1 * this.den2);
    } else if (this.operator === '/') {
      this.result = (this.num1 * this.den2) / (this.num2 * this.den1);
    }
  }
}

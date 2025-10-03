import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Needed for *ngIf in the template

@Component({
  selector: 'app-fraction-calculator',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './fraction-calculator.html',
  styleUrls: ['./fraction-calculator.css']
})
export class FractionCalculator {
  num1: number = 0;
  den1: number = 0;
  operator: string = '+'; // Default operator
  num2: number = 0;
  den2: number = 0;
  result: number | null = null; // Changed to allow for an initial empty state

  calculate() {
    if (this.den1 === 0 || this.den2 === 0) {
        this.result = Infinity; // Or handle error appropriately
        return;
    }

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
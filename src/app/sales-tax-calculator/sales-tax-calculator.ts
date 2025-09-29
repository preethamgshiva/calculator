import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sales-tax-calculator',
  imports: [FormsModule],
  template: `
    <h3 class="text-center p-2">Sales Tax Calculator</h3>
    <div class="container border">
      Before Tax Price: <input type="number" class="p-2 m-2" [(ngModel)]="btp" >
      <br>
      Sales Tax: <input type="number" class="p-2 m-2" [(ngModel)]="st" >%<button class="btn btn-primary m-2" (click)="calculate()" >Calculate</button>
      <br>
      After Tax Price: <input type="number" class="p-2 m-2" [(ngModel)]="atp">
    </div>
  `,
  styleUrl: './sales-tax-calculator.css'
})
export class SalesTaxCalculator {
  btp = 0
  st = 0
  atp = 0
  calculate() {
    this.atp = this.btp + (this.btp * (this.st / 100));
  }
}

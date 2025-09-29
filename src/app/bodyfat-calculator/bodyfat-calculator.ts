import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bodyfat-calculator',
  imports: [FormsModule, DecimalPipe],
  standalone: true,
  template: `
    <h3 class="title text-center p-4">Body Fat Calculator</h3>

    <div class="container d-inline-flex border p-2">
      <p class="p-2 m-2">Gender</p>
      <select [(ngModel)]="gender" name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>

    <div class="container d-inline-flex border p-2">
      <p class="p-2 m-2">Age</p>
      <input type="number" placeholder="Age" [(ngModel)]="age">
    </div>

    <div class="container d-inline-flex border p-2">
      <p class="p-2 m-2">Height (cm)</p>
      <input type="number" placeholder="Height" [(ngModel)]="height">
    </div>

    <div class="container d-inline-flex border p-2">
      <p class="p-2 m-2">Neck (cm)</p>
      <input type="number" placeholder="Neck" [(ngModel)]="neck">
    </div>

    <div class="container d-inline-flex border p-2">
      <p class="p-2 m-2">Waist (cm)</p>
      <input type="number" placeholder="Waist" [(ngModel)]="waist">
    </div>

    <div class="container p-2">
      <button class="btn btn-primary m-2" (click)="calculate()">Calculate</button>
      <button class="btn btn-secondary m-2" (click)="reset()">Reset</button>
      <p class="p-2 m-2">Result: {{result | number:'1.1-2'}} %</p>
    </div>
  `,
})
export class BodyfatCalculator {
  result = 0;
  height = 0;
  waist = 0;
  neck = 0;
  age = 0;
  gender = "male";

  calculate() {
    const h = this.height;
    const w = this.waist;
    const n = this.neck;

    if (this.gender === "male") {
      this.result = 495 / (1.0324 - 0.19077 * Math.log10(w - n) 
                                  + 0.15456 * Math.log10(h)) - 450;
    } else {
      // Needs hip input for accuracy
      this.result = 0; 
      alert("Female formula needs hip measurement (not included).");
    }
  }

  reset() {
    this.result = 0;
    this.height = this.waist = this.neck = this.age = 0;
    this.gender = "male";
  }
}

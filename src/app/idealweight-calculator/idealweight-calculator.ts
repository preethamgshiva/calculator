import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-idealweight-calculator',
  imports: [FormsModule],
  template: `
    <h3 class="text-center">Ideal Weight Calculator</h3>
    <div class="container border">
      <div class="container d-inline-flex center items-center m-2">
        <p class="m-2">Age:</p><input type="number" placeholder="Age between 2-80">
      </div>
      <br>
      <div class="container d-inline-flex m-2">
        <p class="m-2">Height:</p><input type="number" placeholder="Height bw 100-250">
      </div>
      <div class="container d-inline-flex m-2 p-4">
        <select [(ngModel)]="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div class="container d-inline-flex m-2">
        <button class="btn btn-primary" (click)="calculate()">Calculate</button>
      </div>
      <div class="container d-inline-flex p-4">
          <h4>Your ideal weight is: {{result}}</h4>
      </div>
    </div>
  `,
  styleUrl: './idealweight-calculator.css'
})
export class IdealweightCalculator {
  gender = "Male";
  height = 170; // cm
  result = 0;

  calculate() {
    // convert cm → inches
    const heightInInches = this.height / 2.54;

    if (this.gender === "Male") {
      this.result = 50 + 2.3 * (heightInInches - 60);
    } else {
      this.result = 45.5 + 2.3 * (heightInInches - 60);
    }
  }
}


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi-calculator',
  imports: [FormsModule],
  template:`
    <h3 class="title text-center p-4">BMI Calculator</h3>
    <div class="container border">
      <input type="number" placeholder="Age" class="m-3">Age 2-120
      <br>
      <select name="age" class="m-3">
        <option value="1">Male</option>
        <option value="2">Female</option>
      </select> Select Gender
      <br>
      <input type="number" placeholder="Height" class="m-3" [(ngModel)]="height">Height in cm
      <br>
      <input type="number" placeholder="Weight" class="m-3" [(ngModel)]="weight">Weight in kg
      <br>
      <button class="btn btn-primary m-3" (click)="calculate()">Calculate BMI</button>

      <h3 class="text-center p-4 {{color}}">Your BMI is: {{bmi}}</h3>
      <p class="text-center p-4">Healthy BMI is 18.5-24.9</p>
    </div>
  `,
  styleUrl: './bmi-calculator.css'
})
export class BmiCalculator {
  bmi = 0;
  weight = 0;
  height = 0;
  color = 'text-secondary';
  calculate(){
    this.height = this.height/100;
    this.bmi = this.weight / (this.height*this.height);
    if(this.bmi >= 18.5 && this.bmi <= 24.9){
      this.color = 'text-success';
    }
    else{
      this.color = 'text-danger';
    }
  }
}

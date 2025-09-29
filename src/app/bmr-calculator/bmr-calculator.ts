import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmr-calculator',
  imports: [FormsModule],
  template:`
    <h3 class="text-center p-4">BMR Calculator</h3>
    <div class="container border">
      <div class="d-inline-flex p-2">
        <p class="fs-5 m-2 p-2" >Age</p><input type="number" [(ngModel)]="age" placeholder="Age in Years: " class="m-2 p-2"><p class="fs-5 m-2 p-2">Ages 15-18</p>
      </div>
      <br>
      <div class="p-2 d-inline-flex">
        <p class="fs-5 m-2 p-2">Gender</p>
        <select name="gender" class="p-2" [(ngModel)]="gender" (change)="calculate()">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <br>
      <div class="p-2 d-inline-flex">
        <p class="fs-5 m-2 p-2">Height</p>
        <input type="number" placeholder="Height in cm: " class="m-2 p-2" [(ngModel)]="height">
        <p class="fs-5 m-2 p-2">Height in cm</p>
      </div>
      <br>
      <div class="p-2 d-inline-flex">
        <p class="fs-5 m-2 p-2">Weight</p>
        <input type="number" placeholder="Weight in kg: " class="m-2 p-2" [(ngModel)]="weight">
        <p class="fs-5 m-2 p-2">Weight in kg</p>
      </div>
    </div>
    <br>
    <div class="container border p-4">
      <button class="btn btn-primary" (click)="calculate()">Calculate</button>
      <p class="fs-5 m-2 p-2">Your BMR is: {{bmr}} kcal</p>
    </div>
  `,
  styleUrl: './bmr-calculator.css'
})
export class BmrCalculator {
  gender = "male";
  age = 0;
  height = 0;
  weight = 0;
  bmr = 0;
  calculate(){
    if (this.gender == "male"){
      this.bmr = 88.362 + (13.397 * this.weight) + (4.799 * this.height) - (5.677 * this.age);
    }
    else{
      this.bmr = 447.593 + (9.247 * this.weight) + (3.098 * this.height) - (4.330 * this.age);
    }
  }
}

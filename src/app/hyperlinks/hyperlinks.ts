import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hyperlinks',
  imports: [ RouterLink],
  template: `
    <div class="calculators-type-container d-flex w-100 word-wrap" >
        <div class="mathematical-calculator border border-2 p-2 m-1 w-100">
          <h5 class="p-2 bg-primary rounded">Math Calculators</h5>
          <a routerLink="/simple-calculator">Simple Calculator</a>
          <br>
          <a routerLink="/scientific-calculator">Scientific Calculator</a>
          <br>
          <a routerLink="/fraction-calculator">Fraction Calculator</a>
          <br>
          <a routerLink="/percentage-calculator">Percentage Calculator</a>
          <br>
          <a routerLink="/random-number">Random Number Generator</a>
          <br>
          <a routerLink="/triangle-calculator">Triangle Calculator</a>
          <br>
          <a routerLink="/standard-deviation">Standard Deviation Calculator</a>
          <br>

        </div>
        <div class="other-calculator border border-2 p-2 m-1 w-100">
          <h5 class="p-2 bg-primary rounded">Other Calculators</h5>
          <a routerLink="/age-calculator">Age Calculator</a>
          <br>
          <a routerLink="/date-calculator">Date Calculator</a>
          <br>
          <a routerLink="/time-calculator">Time Calculator</a>
          <br>
          <a routerLink="/hours-calculator"> Hours Calculator</a>
          <br>
          <a routerLink="/gpa-calculator">GPA Calculator</a>
          <br>
          <a routerLink="/grade-calculator">Grade Calculator</a>
          <br>
          <a routerLink="/area-volume-calculator">Area and Volume Calculator</a>
          <br>
          <a routerLink="/subnet-calculator">Subnet Calculator</a>
          <br>
          <a routerLink="/conversion-calculator">Conversion Calculator</a>
          <br>
        </div>
        <div class="fitness-calculator border border-2 p-2 m-1 w-100">
          <h5 class="p-2 bg-primary rounded">Fitness and Health Calculators</h5>
            <a routerLink="/bmi-calculator">BMI Calculator</a>
            <br>
            <a routerLink="/calorie-calculator">Calorie Calculator</a>
            <br>
            <a routerLink="/bodyfat-calculator">Body Fat Calculator</a>
            <br>
            <a routerLink="/bmr-calculator">BMR Calculator</a>
            <br>
            <a routerLink="/idealweight-calculator">Ideal weight Calculator</a>
            <br>
            <a routerLink="/pace-calculator">Pace Calculator</a>
            <br>
            <a routerLink="/pregnency-calculator">Pregnency Calculator</a>
            <br>
            <a routerLink="/pregnency-conception-calculator">Pregnency Conception Calculator</a>
            <br>
            <a routerLink="/duedate-calculator">Due Date Calculator</a>
            <br>
        </div>
        <div class="financial-calculator border border-2 p-2 m-1 w-100">
          <h5 class="p-2 bg-primary rounded">Financial Calculators</h5>
          <a routerLink="/mortgage-calculator">Mortgage Calculator</a>
          <br>
          <a routerLink="/loan-calculator">Loan Calculator</a>
          <br>
          <a routerLink="/auto-loan-calculator">Auto Loan Calculator</a>
          <br>
          <a routerLink="/interest-calculator">Interest Calculator</a>
          <br>
          <a routerLink="/payment-calculator">Payment Calculator</a>
          <br>
          <a href="/under-progress">Retirement Calculator</a>
          <br>
          <a routerLink="/amortization-calculator">Amortization Calculator</a>
          <br>
          <a href="/under-progress">Investment Calculator</a>
          <br>
          <a routerLink="/inflation-calculator">Inflation Calculator</a>
          <br>
          <a href="/under-progress">Finance Calculator</a>
          <br>
          <a href="/under-progress">Income Tax Calculator</a>
          <br>
          <a href="/under-progress">Compound Interest Calculator</a>
          <br>
          <a routerLink="/salary-calculator">Salary Calculator</a>
          <br>
          <a href="/under-progress">Interest Rate Calculator</a>
          <br>
          <a routerLink="/sales-tax-calculator">Sales Tax Calculator</a>
    
        </div>
    </div>
  `,
  styleUrl: './hyperlinks.css'
})
export class Hyperlinks {

}

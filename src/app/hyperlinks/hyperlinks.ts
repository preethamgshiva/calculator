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
          <p routerLink="">Triangle Calculator</p>
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
          <p href="">Grade Calculator</p>
  
          <a routerLink="/area-volume-calculator">Area and Volume Calculator</a>
          <br>
          <p href="">Subnet Calculator</p>
        
          <a routerLink="/conversion-calculator">Conversion Calculator</a>
          <br>
        </div>
        <div class="fitness-calculator border border-2 p-2 m-1 w-100">
          <h5 class="p-2 bg-primary rounded">Fitness and Health Calculators</h5>
            <a routerLink="/bmi-calculator">BMI Calculator</a>
            <br>
            <p href="">Calorie Calculator</p>
            
            <a routerLink="/bodyfat-calculator">Body Fat Calculator</a>
            <br>
            <a routerLink="/bmr-calculator">BMR Calculator</a>
            <br>
            <a routerLink="/idealweight-calculator">Ideal weight Calculator</a>
            <br>
            <a routerLink="/pace-calculator">Pace Calculator</a>
            <br>
            <p href="">Pregnency Calculor</p>
            
            <p href="">Pregnency Conception Calculator</p>
            
            <p href="">Due Date Calculator</p>
            <br>
        </div>
        <div class="financial-calculator border border-2 p-2 m-1 w-100">
          <h5 class="p-2 bg-primary rounded">Financial Calculators</h5>
          <p href="">Mortgage Calculator</p>
          
          <p href="">Loan Calculator</p>
          
          <p href="">Auto Loan Calculator</p>
          
          <p href="">Interest Calculator</p>
          
          <p href="">Payment Calculator</p>
          
          <p href="">Retirement Calculator</p>
          
          <p href="">Amortization Calculator</p>
          
          <p href="">Investment Calculator</p>
          
          <p href="">Inflation Calculator</p>
          
          <p href="">Finance Calculator</p>
          
          <p href="">Income Tax Calculator</p>
          
          <p href="">Compound Interest Calculator</p>
          
          <p href="">Salary Calculator</p>
    
          <p href="">Interest Rate Calculator</p>
    
          <p href="">Sales Tax Calculator</p>
    
        </div>
    </div>
  `,
  styleUrl: './hyperlinks.css'
})
export class Hyperlinks {

}

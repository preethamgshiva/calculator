import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-calculator',
  imports: [],
  template: `
  <div class="container">
      <div>
        <input type="none" value="{{display}}">
      </div>
      <div class="buttons-container">
          <div class="row1">
            <button (click)="setValue('7')">7</button>
            <button (click)="setValue('8')">8</button>
            <button (click)="setValue('9')">9</button>
            <button (click)="setValue('+')">+</button>
          </div>
          <div class="row2">
            <button (click)="setValue('4')">4</button>
            <button (click)="setValue('5')">5</button>
            <button (click)="setValue('6')">6</button>
            <button (click)="setValue('-')">-</button>
          </div>
          <div class="row3">
            <button (click)="setValue('1')">1</button>
            <button (click)="setValue('2')">2</button>
            <button (click)="setValue('3')">3</button>
            <button (click)="setValue('*')">*</button>
          </div>
          <div class="row4">
            <button class="zero" (click)="setValue('0')">0</button>
            <button (click)="setValue('.')">.</button>
            <button (click)="setValue('/')">/</button>
          </div>
          <div class="row5">
            <button (click)="clearDisplay()">Clear</button>
            <button (click)="evaluate()">=</button>
          </div>
      </div>
    </div>
  `,
  styleUrl: './simple-calculator.css'
})
export class SimpleCalculator {
    display = '';
  setValue(val: string){
    this.display = this.display+=val
    console.log(this.display)
  }

  evaluate(){
    try{
      this.display = eval(this.display)
    }
    catch(e){
      this.display = 'Error'
    }
    console.log(this.display)
  }

  clearDisplay(){
    this.display = ''
  }

}

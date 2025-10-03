import { Component } from '@angular/core';

@Component({
  selector: 'app-scientific-calculator',
  templateUrl: './scientific-calculator.html',
  styleUrls: ['./scientific-calculator.css']
})
export class ScientificCalculator {
  display: string = '0';

  append(input: string) {
    if (this.display === '0' || this.display === 'Error') {
      if (input.startsWith('Math.')) {
        this.display = input;
      } else {
        this.display = input;
      }
    } else {
      this.display += input;
    }
  }

  clear() {
    this.display = '0';
  }

  backspace() {
    this.display = this.display.slice(0, -1) || '0';
  }

  calculate() {
    try {
      let expression = this.display.replace(/\^/g, '**');
      const result = new Function('return ' + expression)();

      if (isNaN(result) || !isFinite(result)) {
        this.display = 'Error';
      } else {
        this.display = String(parseFloat(result.toPrecision(12)));
      }
    } catch {
      this.display = 'Error';
    }
  }
}

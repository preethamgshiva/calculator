import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.html',
  styleUrl: './simple-calculator.css'
})
export class SimpleCalculator {
  display: string = '0';

  setValue(val: string) {
    if (this.display === '0' || this.display === 'Error') {
      this.display = val;
    } else {
      this.display += val;
    }
  }

  toggleSign() {
    if (this.display !== '0' && this.display !== 'Error') {
      if (!isNaN(parseFloat(this.display))) {
        this.display = (parseFloat(this.display) * -1).toString();
      }
    }
  }

  setPercentage() {
    if (this.display !== 'Error') {
      if (!isNaN(parseFloat(this.display))) {
        this.display = (parseFloat(this.display) / 100).toString();
      }
    }
  }

  evaluate() {
    try {
      const expression = this.display
        .replace(/×/g, '*')
        .replace(/÷/g, '/');

      const result = new Function('return ' + expression)();
      
      if (isNaN(result) || !isFinite(result)) {
        this.display = 'Error';
      } else {
        this.display = parseFloat(result.toPrecision(12)).toString();
      }
    } catch (e) {
      this.display = 'Error';
    }
  }

  clearDisplay() {
    this.display = '0';
  }

  deleteLast() {
    if (this.display.length > 1 && this.display !== 'Error') {
      this.display = this.display.slice(0, -1);
    } else {
      this.display = '0';
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;

    if (!isNaN(Number(key))) {
      this.setValue(key);
    } else if (['+', '-', '*', '/', '.', '%'].includes(key)) {
      if (key === '*') {
        this.setValue('×');
      } else if (key === '/') {
        this.setValue('÷');
      } else {
        this.setValue(key);
      }
    } else if (key === 'Enter' || key === '=') {
      this.evaluate();
    } else if (key === 'Backspace') {
      this.deleteLast();
    } else if (key.toLowerCase() === 'c') {
      this.clearDisplay();
    }
    else if (key === 'Escape') {
      this.display = '0';
    }
  }
}

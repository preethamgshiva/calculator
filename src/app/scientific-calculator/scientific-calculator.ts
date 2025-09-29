import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgFor],
  standalone: true,
  styleUrls: ['./scientific-calculator.css'],
  template: `
    <div class="mainContainer p-3 max-w-md mx-auto border m-4  bg-primary-subtle">
      <input 
        type="text" 
        [value]="display()" 
        disabled 
        class="input-container w-100 mb-2  text-right text-xl rounded border border-gray-400 bg-white"
      />

      <div class="grid grid-cols-4 gap-2 row-gap-2 container border border-black">
        <!-- Row 1 -->
        <div class="sincos col-span-2 p-2">
          <button (click)="clearDisplay()">C</button>
          <button (click)="deleteChar()">DEL</button>
          <button (click)="appendChar('(')">(</button>
          <button (click)="appendChar(')')">)</button>
        </div>

        <!-- Row 2 -->
        <div>
          <button class="btn-num" *ngFor="let n of ['7','8','9']" (click)="appendChar(n)">{{n}}</button>
          <button class="btn-op" (click)="appendChar('/')">/</button>
        </div>

        <!-- Row 3 -->
        <div>
          <button class="btn-num" *ngFor="let n of ['4','5','6']" (click)="appendChar(n)">{{n}}</button>
          <button class="btn-op" (click)="appendChar('*')">*</button>
        </div>

        <!-- Row 4 -->
        <div>
          <button class="btn-num" *ngFor="let n of ['1','2','3']" (click)="appendChar(n)">{{n}}</button>
          <button class="btn-op" (click)="appendChar('-')">-</button>
        </div>

        <!-- Row 5 -->
        <div>
          <button class="btn-num" (click)="appendChar('0')">0</button>
          <button class="btn-num" (click)="appendChar('.')">.</button>
          <button class="btn-equal" (click)="calculate()">=</button>
          <button class="btn-op" (click)="appendChar('+')">+</button>
        </div>

        <!-- Row 6 - Scientific -->
        <div>
          <button class="btn-fn" (click)="appendChar('Math.sin(')">sin</button>
          <button class="btn-fn" (click)="appendChar('Math.cos(')">cos</button>
          <button class="btn-fn" (click)="appendChar('Math.tan(')">tan</button>
          <button class="btn-fn" (click)="appendChar('Math.log(')">log</button>
        </div>

        <!-- Row 7 -->
        <div>
          <button class="btn-fn" (click)="appendChar('Math.sqrt(')">√</button>
          <button class="btn-fn" (click)="appendChar('**')">^</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .btn-num, .btn-op, .btn-fn, .btn-equal, .btn-special {
        @apply h-16 rounded-lg text-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800;
      }
      .btn-num { @apply bg-gray-700 text-white hover:bg-gray-600 focus:ring-cyan-500; }
      .btn-op { @apply bg-gray-600 text-cyan-400 hover:bg-gray-500 focus:ring-cyan-500; }
      .btn-fn { @apply bg-gray-600 text-purple-400 hover:bg-gray-500 focus:ring-purple-500 text-lg; }
      .btn-special { @apply bg-gray-600 text-yellow-400 hover:bg-gray-500 focus:ring-yellow-500; }
      .btn-equal { @apply bg-cyan-600 text-white hover:bg-cyan-500 focus:ring-cyan-400; }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScientificCalculator {
  // Reactive signal for the display
  display = signal('');

  appendChar(char: string) {
    this.display.set(this.display() + char);
  }

  clearDisplay() {
    this.display.set('');
  }

  deleteChar() {
    this.display.set(this.display().slice(0, -1));
  }

  calculate() {
    try {
      // Use eval for now (simple)
      const result = eval(this.display());
      this.display.set(result.toString());
    } catch (err) {
      alert('Invalid Expression');
    }
  }
}

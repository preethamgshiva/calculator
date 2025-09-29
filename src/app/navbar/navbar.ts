import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  template: `
    <div class="bg-primary-subtle w-100 p-3">
      <nav class="d-flex align-items-center pt-3 pb-1 position-relative">

        <button class="btn btn-secondary position-absolute start-0 ms-3" (click)="goBack()">Back</button>

        <h3 class="mx-auto mb-0">Calculator</h3>

        <button class="btn btn-primary position-absolute end-0 me-3" (click)="goHome()">Home</button>
      </nav>
    </div>
  `,
  styleUrl: './navbar.css'
})
export class Navbar {
  goHome() {
    window.location.href = '/';
  }

  goBack() {
    window.history.back();
  }
}

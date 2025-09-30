import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  imports: [NgIf],
  template: `
    <div class="bg-primary-subtle w-100 p-3 mb-3">
      <nav class="d-flex align-items-center pt-3 pb-1 position-relative mb-3">

        <button 
          *ngIf="!hideBackButton" 
          class="btn btn-secondary position-absolute start-0 ms-3" 
          (click)="goBack()">Back</button>

        <h3 class="mx-auto mb-0">Calculator</h3>

        <button class="btn btn-primary position-absolute end-0 me-3" (click)="goHome()">Home</button>
      </nav>
    </div>
  `,
  styleUrls: ['./navbar.css']
})
export class Navbar {
  hideBackButton = false;

  constructor(private router: Router) {
    // Listen for navigation changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const currentUrl = event.urlAfterRedirects;
        this.hideBackButton = currentUrl === '/' || currentUrl === '/hyperlinks';
      });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  goBack() {
    window.history.back();
  }
}

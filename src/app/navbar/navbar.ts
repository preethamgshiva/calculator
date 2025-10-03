import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
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

        <h3 class="mx-auto mb-0">{{ pageTitle }}</h3>

        <button class="btn btn-primary position-absolute end-0 me-3" (click)="goHome()">Home</button>
      </nav>
    </div>
  `,
  styleUrls: ['./navbar.css']
})
export class Navbar {
  pageTitle = '';
  hideBackButton = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const childRoute = this.getChild(this.activatedRoute);

        childRoute.data.subscribe((data) => {
          this.pageTitle = data['title'] || 'Calculator';
        });

        const currentUrl = this.router.url;
        this.hideBackButton = currentUrl === '/' || currentUrl === '/hyperlinks';
      });
  }

  private getChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  goHome() {
    this.router.navigate(['/']);
  }

  goBack() {
    window.history.back();
  }
}

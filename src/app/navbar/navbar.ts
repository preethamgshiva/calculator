import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.html',
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

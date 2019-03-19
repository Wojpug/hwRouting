import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hwRouting';

  constructor(private router: Router) {}

  goToButton(routeName: string) {
    this.router.navigateByUrl(routeName);
  }
}

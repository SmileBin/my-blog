import { Component } from '@angular/core';

@Component({
  selector: 'blog-root',
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
 
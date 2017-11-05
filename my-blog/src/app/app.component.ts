import { Component } from '@angular/core';

@Component({
  selector: 'blog-root',
  template: `
  <top-bar></top-bar>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

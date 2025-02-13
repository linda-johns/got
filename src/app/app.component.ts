import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'GameOfThrones';
}

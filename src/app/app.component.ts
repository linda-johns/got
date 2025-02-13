import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'GameOfThrones';
}

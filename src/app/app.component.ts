import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = signal('delicious-food-ordering-app');
}

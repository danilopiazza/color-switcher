import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = '';

  setColor(color: string): void {
    console.log('setColor begin', this.color, color);
    this.color = color;
    console.log('setColor end', this.color, color);
  }
}

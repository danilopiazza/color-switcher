import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color-change-button',
  templateUrl: './color-change-button.component.html',
  styleUrls: ['./color-change-button.component.css']
})
export class ColorChangeButtonComponent {
  @Input() color = '';
  @Output() colorChanged = new EventEmitter<string>();

  setColor() {
    this.colorChanged.emit(this.color);
  }
}

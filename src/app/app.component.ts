import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setColor } from './state/color.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color$: Observable<string>;

  constructor(private store: Store<{ color: string }>) {
    this.color$ = store.select('color');
  }

  setColor(color: string): void {
    this.store.dispatch(setColor({ color }));
  }
}

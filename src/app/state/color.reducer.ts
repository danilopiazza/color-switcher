import { createReducer, on } from '@ngrx/store';
import { setColor } from './color.actions';

export const initialState = '';

export const colorReducer = createReducer(
  initialState,
  on(setColor, (state, { color }) => color)
);

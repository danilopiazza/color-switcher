import { createAction, props } from '@ngrx/store';

export const setColor = createAction(
  '[Color] Set Color',
  props<{ color: string }>()
);

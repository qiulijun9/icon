import states from '../state';
import { IS_BLACK_THEME } from '../actionTypes';

interface blackThemeAction {
  type: string;
  data: boolean;
}

export function isBlackThemeReducer(
  state = states.isBlackTheme,
  action: blackThemeAction
): boolean {
  switch (action.type) {
    case IS_BLACK_THEME:
      return action.data;
    default:
      return state;
  }
}

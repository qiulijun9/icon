import states from '../state';
import { IS_DRAGING } from '../actionTypes';

interface dragAction {
  type: string;
  data: boolean;
}

export function dragReducer(state = states.isDraging, action: dragAction): boolean {
  switch (action.type) {
    case IS_DRAGING:
      return action.data;
    default:
      return state;
  }
}

import states from '../state';
import { IS_GROUPING } from '../actionTypes';

interface groupAction {
  type: string;
  data: boolean;
}

export function grouping(state = states.isGrouping, action: groupAction): boolean {
  switch (action.type) {
    case IS_GROUPING:
      return action.data;
    default:
      return state;
  }
}

import states from '../state';
import { CURRENT_PROJECT } from '../actionTypes';
import { CurrentProject } from '../state';

interface CurrentProjectAction {
  type: string;
  data: CurrentProject;
}

export function currentProjectReducer(
  state = states.currentProject,
  action: CurrentProjectAction
): CurrentProject {
  switch (action.type) {
    case CURRENT_PROJECT:
      return { ...state, ...action.data };
    default:
      return state;
  }
}

import { combineReducers } from 'redux';
import { isGrouping } from './groupReducer';
import { dragReducer } from './dragReducer';
import { currentProjectReducer } from './currentProjectReducer';
import { isBlackThemeReducer } from './isBlackThemeReducer';

const reducer = combineReducers({
  isGrouping: isGrouping,
  isDraging: dragReducer,
  currentProject: currentProjectReducer,
  isBlackTheme: isBlackThemeReducer
});

export default reducer;

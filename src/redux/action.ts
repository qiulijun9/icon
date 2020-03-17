import { Drag, CurrentProject } from './state';
import { IS_GROUPING, IS_DRAGING, CURRENT_PROJECT, IS_BLACK_THEME } from './actionTypes';

export const groupingStatusCreator = (data: boolean) => ({
  type: IS_GROUPING,
  data
});

export const dragingStatusCreator = (data: Drag) => ({
  type: IS_DRAGING,
  data
});

// 当前项目
export const currentProjectCreator: Function = (
  currentProject: CurrentProject
): object => ({
  type: CURRENT_PROJECT,
  data: currentProject
});

export const blackThemeCreator = (data: boolean) => ({
  type: IS_BLACK_THEME,
  data
});

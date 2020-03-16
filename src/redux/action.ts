import { Drag } from './state';
import { IS_GROUPING, IS_DRAGING } from './actionTypes';

export const groupingStatusCreator = (data: boolean) => ({
  type: IS_GROUPING,
  data
});

export const dragingStatusCreator = (data: Drag) => ({
  type: IS_DRAGING,
  data
});

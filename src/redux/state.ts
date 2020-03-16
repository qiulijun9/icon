export interface Drag {
  group: boolean;
  shoppingCart: boolean;
}

export interface States {
  isGrouping: boolean;
  drag: Drag;
}

export default {
  isGrouping: false,
  drag: {
    group: false,
    shoppingCart: false
  }
};

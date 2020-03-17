export interface Drag {
  group: boolean;
  shoppingCart: boolean;
}

export interface CurrentProject {
  projectId?: string;
  projectName?: string;
  projectType?: string;
  iconType?: string;
  members?: Array<string>;
  icons?: Array<string>;
  link?: string;
}

export interface State {
  isGrouping: boolean;
  isDraging: boolean;
  currentProject: CurrentProject;
  isBlackTheme: boolean;
}

export default {
  isGrouping: false,
  isDraging: false,
  currentProject: {},
  isBlackTheme: false
};

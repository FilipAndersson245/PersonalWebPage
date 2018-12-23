export enum ActionTypes {
  HOME_ROUTE = "[routing] home",
  ABOUT_ROUTE = "[routing] about"
}

export interface IHomeRouteAction {
  type: ActionTypes.HOME_ROUTE;
  payload: {};
}

export interface IAboutRouteAction {
  type: ActionTypes.ABOUT_ROUTE;
  payload: {};
}

export type Action = IHomeRouteAction | IAboutRouteAction;

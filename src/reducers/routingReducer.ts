import { Action, ActionTypes } from "../actions/routingActions";
import { exhaustiveCheck } from "ts-exhaustive-check";

export interface IState {
  readonly title: string;
}

export const initialState: IState = {
  title: "Home"
};

export function reducer(state: IState = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.HOME_ROUTE:
    case ActionTypes.ABOUT_ROUTE:
      return state;
    default:
      return exhaustiveCheck(action);
  }
}

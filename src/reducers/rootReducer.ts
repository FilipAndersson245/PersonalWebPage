import * as fromRouting from "./routingReducer";
import { combineReducers } from "redux";

export interface IState {
  routing: fromRouting.IState;
}

export const initialState: IState = {
  routing: fromRouting.initialState
};

export const reducer = combineReducers<IState>({
  routing: fromRouting.reducer
});

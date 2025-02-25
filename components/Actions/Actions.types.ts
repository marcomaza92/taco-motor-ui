import type { Action } from "../Action/Action.types";

export interface Actions {
  actions: Action[];
  elementId: number;
}

export type ActionsProps = Actions;

export interface Action {
  name: string;
  fn: (params: number | never) => Promise<void>;
}

export interface ActionsProps {
  actions: Action[];
  elementId: number;
}

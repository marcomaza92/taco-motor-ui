export interface Action {
  name: string;
  fn: (params: any) => Promise<void>;
}

export interface ActionsProps {
  actions: Action[];
  elementId: number;
}

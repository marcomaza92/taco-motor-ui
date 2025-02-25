export interface Action {
  name: string;
  fn: (params: number | never) => Promise<void>;
}

export type ActionProps = Action;

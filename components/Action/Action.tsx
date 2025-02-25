"use client";
import { Actions } from "../Actions/Actions.types";
import type { Action } from "./Action.types";

const Action = (props: Action & Pick<Actions, "elementId">) => {
  const { name, fn, elementId } = props;

  return (
    <button onClick={() => fn(elementId)} type="button">
      {name}
    </button>
  );
};

export default Action;

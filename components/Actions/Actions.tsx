"use client";
import type { ActionsProps, Action } from "./Actions.types";

const Actions = (props: ActionsProps) => {
  const { actions, elementId } = props;

  return (
    <div>
      {actions.map((action: Action, index: number) => (
        <button key={index} onClick={() => action.fn(elementId)} type="button">
          {action.name}
        </button>
      ))}
    </div>
  );
};

export default Actions;

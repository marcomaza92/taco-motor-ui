"use client";
import Action from "../Action/Action";
import type { ActionsProps } from "./Actions.types";

const Actions = (props: ActionsProps) => {
  const { actions, elementId } = props;

  return (
    <div>
      {actions.map((action, index: number) => (
        <Action
          key={index}
          name={action.name}
          fn={action.fn}
          elementId={elementId}
        />
      ))}
    </div>
  );
};

export default Actions;

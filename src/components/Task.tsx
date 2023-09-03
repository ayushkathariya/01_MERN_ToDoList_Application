import React from "react";

import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

interface Props {
  task: {
    _id: string;
    owner: string;
    task: string;
  };
}

const Task: React.FC<Props> = ({ task }) => {
  return (
    <div className="flex items-center justify-between px-3 mt-3 border rounded md:mt-4">
      <p>{task.task}</p>
      <span className="flex items-center justify-center gap-3">
        <EditButton taskId={task._id} />
        <DeleteButton taskId={task._id} />
      </span>
    </div>
  );
};

export default Task;

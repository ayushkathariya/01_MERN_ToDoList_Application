import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useCreateTaskMutation } from "../redux/services/userApi";

export default function CreateTask() {
  const [open, setOpen] = React.useState(false);
  const [task, setTask] = React.useState("");
  const [createTaskApi] = useCreateTaskMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    createTaskApi({ task });
    setOpen(false);
  };

  return (
    <div className="mt-10">
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Task</DialogTitle>
        <DialogContent className="w-80 md:w-96">
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter a task"
            type="text"
            fullWidth
            variant="standard"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

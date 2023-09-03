import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useUpdateTaskMutation } from "../redux/services/userApi";

interface Props {
  taskId: string;
}

export default function EditButton({ taskId }: Props) {
  const [open, setOpen] = React.useState(false);
  const [newTask, setNewTask] = React.useState("");
  const [updateApi] = useUpdateTaskMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    updateApi({ taskId, newTask });
    setOpen(false);
  };

  return (
    <div className="mt-10">
      <button onClick={handleClickOpen}>
        <EditOutlinedIcon className="text-yellow-500 cursor-pointer mb-9 hover:text-yellow-600" />
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Task</DialogTitle>
        <DialogContent className="w-80 md:w-96">
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter new newTask"
            type="text"
            fullWidth
            variant="standard"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

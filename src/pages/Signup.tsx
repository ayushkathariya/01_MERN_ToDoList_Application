import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSignupApiMutation } from "../redux/services/authApi";
import { toast } from "react-toastify";

const Signup: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signupApi, { isError, isSuccess, error }] = useSignupApiMutation();
  const navigate = useNavigate();
  const customizedError: any = error;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signupApi({ name, email, password });
    if (isSuccess) {
      toast.success("Signup succesful, Login", { autoClose: 1000 });
      navigate("/login");
    }
    if (isError) toast.error(customizedError.data.message, { autoClose: 1000 });
  };

  return (
    <form
      className="flex items-center justify-center h-screen"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-5 md:gap-7 border py-16 px-3 md:px-10 rounded w-[90%] sm:w-[60%] lg:w-[40%] xl:w-[30%]">
        <p className="text-2xl font-semibold text-center">Signup</p>
        <TextField
          id="demo-helper-text-misaligned-no-helper"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          id="demo-helper-text-misaligned-no-helper"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          id="demo-helper-text-misaligned-no-helper"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="info">
          Signup
        </Button>
        <p className="text-center">
          Already have an account ?
          <Link className="ml-2 underline cursor-pointer" to="/login">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Signup;

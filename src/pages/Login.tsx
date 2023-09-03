import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useLoginApiMutation } from "../redux/services/authApi";
import { toast } from "react-toastify";
import { KEY_ACCESS_TOKEN, setItem } from "../utils/localStorageManager";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginApi, { data, error, isError, isSuccess }] = useLoginApiMutation();
  const navigate = useNavigate();

  const customizedError: any = error;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginApi({ email, password });
    if (isSuccess) {
      setItem(KEY_ACCESS_TOKEN, data.accessToken);
      toast.success("Login succesful", { autoClose: 1000 });
      navigate("/");
    }
    if (isError) toast.error(customizedError.data.message, { autoClose: 1000 });
  };

  return (
    <form
      className="flex items-center justify-center h-screen"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-5 md:gap-7 border py-16 px-3 md:px-10 rounded w-[90%] sm:w-[60%] lg:w-[40%] xl:w-[30%]">
        <p className="text-2xl font-semibold text-center">Login</p>
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
        <Button variant="contained" type="submit" color="info">
          Login
        </Button>
        <p className="text-center">
          Don't have an account ?
          <Link className="ml-2 underline cursor-pointer" to="/signup">
            Signup
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;

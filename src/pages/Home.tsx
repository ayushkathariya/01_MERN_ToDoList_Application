import React from "react";
import { useGetUserProfileQuery } from "../redux/services/userApi";
import Loading from "../components/Loading";
import { Container } from "@mui/material";
import Header from "../components/Header";
import CreateTask from "../components/CreateTask";
import Task from "../components/Task";

const Home: React.FC = () => {
  const { isLoading, data } = useGetUserProfileQuery();

  if (isLoading) return <Loading />;

  return (
    <div>
      <Container>
        <Header />
        <CreateTask />
        <div className="mt-10">
          {data &&
            data.user.tasks.map((task: any) => (
              <Task key={task._id} task={task} />
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { KEY_ACCESS_TOKEN, getItem } from "../../utils/localStorageManager";
const accessToken = getItem(KEY_ACCESS_TOKEN);

interface createTaskInterface {
  task: string;
}

interface updateTaskInterface {
  taskId: string;
  newTask: string;
}

interface deleteTaskInterface {
  taskId: string;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://zero1-mern-todolist-server.onrender.com/",
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    getUserProfile: builder.query<any, void>({
      query: () => ({
        method: "GET",
        url: "user",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      providesTags: ["Auth"],
    }),
    createTask: builder.mutation<any, createTaskInterface>({
      query: (body) => ({
        method: "POST",
        url: "task",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
    updateTask: builder.mutation<any, updateTaskInterface>({
      query: (body) => ({
        method: "PUT",
        url: "task",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
    deleteTask: builder.mutation<any, deleteTaskInterface>({
      query: (body) => ({
        method: "DELETE",
        url: "task",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = userApi;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostList, { postLoader } from "./components/PostList.jsx";
import CreatePost from "./components/CreatePost.jsx";
import { createPostAction } from "./components/CreatePost.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction,
      },
      { path: "/", element: <PostList />, loader: postLoader },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

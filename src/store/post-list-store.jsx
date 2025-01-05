import { createContext, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
//used a reducder to store the list array
const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id != action.payload.postID
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
//provider is used for context
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    []
    //DEFAULT_POST_LIST
  ); //reducer value passed here

  // console.log(postList);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postID) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postID,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to mumbai",
//     body: "Hi friedns, I am going to fjfujrifefle mumbai totmorneuv",
//     reaction: 2,
//     userID: "user1",
//     tags: ["happy", "mumbai"],
//   },
//   {
//     id: "2",
//     title: "Going to goa",
//     body: "Hi friedns, I am going to fjfujrifefle goa totmorneuv",
//     reaction: 21,
//     userID: "user11",
//     tags: ["happy", "goa", "vacau"],
//   },
// ];
export default PostListProvider;

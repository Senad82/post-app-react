import React from "react";
import Post from "./Post";

function PostLayout({ posts, selectedTag }) {
  const renderPost = () =>
    posts.map((post, index) => {
      return <Post selectedTag={selectedTag} key={index} post={post} />;
    });

  return <div className="row">{renderPost()}</div>;
}

export default PostLayout;

import React from "react";
import "./MiddleStuffDark.css";
import FeedDark from "../FeedDark/FeedDark";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

const MiddleStuffDark = () => {
  const posts = useSelector((posts: any) => posts.posts.postsData);
  return (
    <div>
      <div className="create-post-div-dark">
        <Avatar src="" alt="" sx={{
          width: 48,
          height: 48,
        }} />
        <input type="text" placeholder="Create shitty post ..." />
        <p className="buttonboi">Create</p>
      </div>
      <div className="feeds">
        {posts?.map((post: any, index: React.Key) => (
          <FeedDark key={index} posts={post} />
        ))}
      </div>
    </div>
  );
};

export default MiddleStuffDark;

import React, { useEffect } from "react";
import "./MiddleStuff.css";
import Feed from "../Feed/Feed";
import { Avatar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

const MiddleStuff = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  const posts = useSelector((posts: any) => posts.posts.postsData);
  return (
    <div>
      <div className="create-post-div">
        <Avatar src="" alt="" sx={{
          width: 48,
          height: 48,
        }} />
        <input type="text" placeholder="Create shitty post ..." />
        <p className="buttonboi">Create</p>
      </div>
      <div className="feeds">
        {posts?.map((post: any, index: React.Key) => (
          <Feed key={index} posts={post} />
        ))}
      </div>
    </div>
  );
};

export default MiddleStuff;

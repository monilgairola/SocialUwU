import React from "react";
import "./ExploreMiddleDark.css";
import FeedDark from "../FeedDark/FeedDark";
import { useSelector } from "react-redux";

const ExploreMiddleDark = () => {
  const posts = useSelector((posts: any) => posts.posts.postsData);
  return (
    <div>
      <div className="feeds">
        {posts?.map((post: any, index: React.Key) => (
          <FeedDark key={index} posts={post} />
        ))}
      </div>
    </div>
  );
};

export default ExploreMiddleDark;

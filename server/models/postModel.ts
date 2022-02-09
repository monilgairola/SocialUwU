import mongoose, { Schema } from "mongoose";

export interface PostModel extends mongoose.Document {
  caption: string;
  image: string;
  likes: [];
  comments: [];
  userId: string;
}

const PostSchema: Schema = new mongoose.Schema(
  {
    caption: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    likes: {
      type: Array,
      default: [],
    },
    comments: {
      type: Array,
      default: [],
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("post", PostSchema);
export default Post;

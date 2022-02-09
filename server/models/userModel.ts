import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface UserModel extends mongoose.Document {
  username: string;
  email: string;
  password: string;
  bio: string;
  followers: [];
  following: [];
}

const UserSchema: Schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 4,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      min: 6,
      max: 14,
      required: true,
    },
    bio: {
      type: String,
      default: "I am dumb",
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  let user = this as UserModel;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hashSync(user.password, salt);

  user.password = hash;

  return next();
});

const User = mongoose.model<UserModel>("user", UserSchema);

export default User;

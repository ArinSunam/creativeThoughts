import { Post, User } from "./models";
import { connectToDb } from "./utils";


//Get Posts
export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find()
    return posts

  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch posts")
  }
};

//Get Sngle Post
export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug })
    return post;

  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch post")
  }
};

//Get User
export const getUser = async (id) => {

  try {
    connectToDb();
    const user = await User.findById(id)
    return user;

  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch user")
  }
}

//Get All users for admin
export const getUsers = async (id) => {
  try {
    connectToDb();
    const users = await User.find()
    return users;

  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch users")
  }
}
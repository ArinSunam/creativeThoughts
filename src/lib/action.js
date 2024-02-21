"use server"

import { revalidatePath } from "next/cache";
import { Post, User } from "./models"
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from 'bcryptjs'

export const addPost = async (prevState, formData) => {



  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  const { title, desc, slug, userId } = Object.fromEntries(formData)

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId
    });

    await newPost.save();
    console.log("Saved to db")
    revalidatePath('/blog');
    revalidatePath('/admin');
  } catch (error) {
    return { error: "Something went wrong" }

  }

}

//AddUser
export const addUser = async (prevState, formData) => {


  const { username, email, password, img } = Object.fromEntries(formData)

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img
    });

    await newUser.save();
    console.log("Saved to db")
    revalidatePath('/admin')
  } catch (error) {
    return { error: "Something went wrong" }

  }

}

//Delete post
export const deletePost = async (formData) => {



  const { id } = Object.fromEntries(formData)

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log('Deleted')
    revalidatePath('/blog');
    revalidatePath('/admin')
  } catch (error) {
    return { error: "Something went wrong" }

  }

}

//Delete user
export const deleteUser = async (formData) => {




  const { id } = Object.fromEntries(formData)

  try {
    connectToDb();
    await Post.deleteMany({ userId: id })
    await User.findByIdAndDelete(id);
    console.log('Deleted')
    revalidatePath('/blog')
  } catch (error) {
    return { error: "Something went wrong" }

  }

}

//login

export const handleGithubLogin = async () => {
  "use server";
  await signIn('github');
};

//logout

export const handleLogout = async () => {
  "use server";
  await signOut();
};

//Register
export const register = async (prevState, formData) => {
  console.log('FromData:', formData)
  const { username, email, password, passwordRepeat } = Object.fromEntries(formData);

  if (password != passwordRepeat) { return { error: 'Passwords donot match' } }

  try {
    connectToDb();
    const user = await User.findOne({ username })
    if (user) {
      return { error: "Username already exists" }
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log('Saved to db')
    return { success: true };
  } catch (error) {
    console.log(error)
    return { error: ' something went wrong' }

  }
}

//loggin
export const login = async (
  prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);



  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error)

    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" }
    }
    throw error;

  }
}
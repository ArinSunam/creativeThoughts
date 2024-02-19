"use server"

import { revalidatePath } from "next/cache";
import { Post } from "./models"
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";

export const addPost = async (formData) => {



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
    revalidatePath('/blog')
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
import Image from 'next/image'
import React, { Suspense } from 'react'
import { getPost } from '../../../lib/data'
import PostUser from '../../../components/postUser';


//Fetch data with an api

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  // console.log('res:', res)

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

// export const generateMetadata = async ({ params }) => {
//   const { slug } = params;



//   const post = await getPost(slug);

//   return {
//     title: post.title,
//     description: post.desc
//   }
// }

const SinglePostPage = async ({ params }) => {

  const { slug } = params;
  //Fetch data with an api
  const post = await getData(slug);
  console.log('post', post)


  //fetch data without an api
  // const post = await getPost(slug);
  console.log(post)
  return (
    <div className='grid grid-cols-3 justify-items-center mt-[40px] '>
      {/* Img container */}
      <div className='col-start-1 col-end-2 relative w-[400px] mmd:hidden' style={{ height: 'calc(100vh - 200px)' }}>
        <Image src={post.img} alt='' fill className='object-cover' />
      </div>


      <div className='col-start-2 col-end-4 flex flex-col gap-[50px] mmd:col-start-1 mmd:col-end-4'>
        <h1 className='text-[64px] msm:text-[40px] '>{post.title}</h1>

        {/* athor details */}

        <div className='flex  gap-[20px] msm:flex-col' >
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}

          <div className='flex flex-col gap-[10px] msm:pl-[65px] '>
            <span className='text-[#777] font-bold'>Published</span>
            <span className='font-medium'>{post.createdAt.toString().slice(4, 16)}</span>
          </div>
        </div>

        {/* Desc */}
        <div className='text-[16px] w-[50vw] mmd:w-[80vw]'>
          <p>{post.desc}</p></div>

      </div>
    </div>
  )
}

export default SinglePostPage

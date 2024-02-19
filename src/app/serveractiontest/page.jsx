import React from 'react'
import { addPost, deletePost } from '../../lib/action'

const ServerActionTestPage = () => {
  return (
    <div>
      <form action={addPost} className='text-black'>
        <input type='text' placeholder='title' name='title' />
        <input type='text' placeholder='desc' name='desc' />
        <input type='text' placeholder='slug' name='slug' />
        <input type='text' placeholder='userId' name='userId' />
        <button>Create</button>
      </form>

      <form action={deletePost}>
        <input type='text' placeholder='postId' name='id' className='text-black' />
        <button>delete</button>
      </form>

    </div>
  )
}

export default ServerActionTestPage

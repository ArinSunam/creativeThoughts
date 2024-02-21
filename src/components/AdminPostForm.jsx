'use client'
import { useFormState } from 'react-dom'
import { addPost } from '../lib/action'

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined)
  return (
    <form action={formAction} className='flex flex-col  text-center gap-[30px]'>
      <h1 className='text-2xl font-bold text-start'>Add to New Post</h1>
      <input type="hidden" name='userId' value={userId} />
      <input type="text" name='title' placeholder='title' className='p-[20px] w-[40vw] mmd:w-[60vw] bg-[#2b2d42] border-none rounded-[5px]' />
      <input type="text" name='slug' placeholder='slug' className='p-[20px] w-[40vw] mmd:w-[60vw] bg-[#2b2d42] border-none rounded-[5px]' />
      <input type="text" name='img' placeholder='img' className='p-[20px] w-[40vw] mmd:w-[60vw] bg-[#2b2d42] border-none rounded-[5px]' />
      <textarea type="text" name='desc' placeholder='desc' rows={10} className='p-[20px] w-[40vw] mmd:w-[60vw] bg-[#2b2d42] border-none rounded-[5px]' />
      <button className="text-white w-[40vw] mmd:w-[60vw] bg-blue-900 p-[12px] rounded-[5px]">Add</button>
      {state && state.error}
    </form>
  )
}

export default AdminPostForm

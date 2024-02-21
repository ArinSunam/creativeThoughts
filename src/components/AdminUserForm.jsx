'use client'
import { useFormState } from 'react-dom'
import { addUser } from '../lib/action'

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined)

  return (
    <form action={formAction} className='flex flex-col  text-center gap-[30px]'>
      <h1 className='text-2xl font-bold text-start'>Add to New User</h1>

      <input type="text" name='username' placeholder='username' className='p-[20px] w-[40vw] mmd:w-[60vw] bg-[#2b2d42] border-none rounded-[5px]' />
      <input type="text" name='email' placeholder='email' className='p-[20px] w-[40vw] mmd:w-[60vw] bg-[#2b2d42] border-none rounded-[5px]' />
      <input type="password" name='password' placeholder='password' className='p-[20px] w-[40vw] mmd:w-[60vw] bg-[#2b2d42] border-none rounded-[5px]' />
      <input type="text" name='img' placeholder='img' className='p-[20px] w-[40vw] mmd:w-[60vw] bg-[#2b2d42] border-none rounded-[5px]' />
      <select name="isAdmin" className='p-[20px] w-[40vw] mmd:w-[60vw] bg-[#2b2d42] border-none rounded-[5px]'  >
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>

      <button className="w-[40vw] mmd:w-[60vw] text-white bg-blue-900 p-[12px] rounded-[5px]">Add</button>
      {state && state.error}
    </form>
  )
}

export default AdminUserForm

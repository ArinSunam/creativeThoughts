"use client"

import { useFormState } from 'react-dom'
import { login } from '../lib/action'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const LoginForm = () => {

  const [state, formAction] = useFormState(login, undefined)

  const router = useRouter();

  // useEffect(() => {
  //   state?.success && router.push("/login")
  // }, [state?.success, router]);
  return (
    <form action={formAction} className='flex flex-col  text-center gap-[30px]'>
      <input type="text" placeholder="username" name="username" className='p-[20px] bg-[#0d0c22] border-none rounded-[5px]' />



      <input type="password" placeholder="password" name="password" className='p-[20px] bg-[#0d0c22] border-none rounded-[5px]' />


      <button className="text-white bg-blue-900 p-[12px] rounded-[5px]" onClick={() => console.log('Clicked')}>Login with credential</button>
      {state?.error}
      <Link href="/register"> Have an account? <b>Register</b></Link>
    </form>
  )
}

export default LoginForm

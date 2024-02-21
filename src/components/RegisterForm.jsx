"use client"

import { useFormState } from 'react-dom'
import { register } from '../lib/action'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const RegisterForm = () => {

  const [state, formAction] = useFormState(register, undefined)

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login")
  }, [state?.success, router]);
  return (
    <form action={formAction} className='flex flex-col  text-center gap-[30px]'>
      <input type="text" placeholder="username" name="username" className='p-[20px] bg-[#0d0c22] border-none rounded-[5px]' />

      <input type="email" placeholder="email" name="email" className='p-[20px] bg-[#0d0c22] border-none rounded-[5px]' />

      <input type="password" placeholder="password" name="password" className='p-[20px] bg-[#0d0c22] border-none rounded-[5px]' />

      <input type="password" placeholder="password again" name="passwordRepeat" className='p-[20px] bg-[#0d0c22] border-none rounded-[5px]' />

      <button className="text-white bg-blue-900 p-[12px] rounded-[5px]" onClick={() => console.log('Clicked')}>Register</button>
      {state?.error}
      <Link href="/login"> Have an account? <b>Login</b></Link>
    </form>
  )
}

export default RegisterForm

import SigninForm from '@/app/_components/forms/signinForm'
import React from 'react'

const Signin = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-[20rem] bg-slate-500 p-4 rounded-lg mt-10'>
          <SigninForm/>
        </div>
    </div>
  )
}

export default Signin

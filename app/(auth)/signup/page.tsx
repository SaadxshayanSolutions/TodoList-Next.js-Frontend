
import SignupForm from '@/app/_components/forms/signupForm'
import React from 'react'

const Signup = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-[20rem] bg-slate-500 p-4 rounded-lg mt-10'>
          <SignupForm/>
        </div>
    </div>
  )
}

export default Signup
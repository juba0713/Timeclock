'use client';
import LoginForm from '@/components/(auth)/login-form';
import React from 'react'

const login = () => {
  return (
    <>
      <div className="container flex flex-col max-w-full h-full justify-center items-center">
          <div className="w-sm flex flex-col justify-center items-center gap-[2rem]">
            <div>
              Timeclock
            </div>
            <div className="flex flex-col">
              <span className="text-[2.4rem] font-bold text-center">Welcome Back</span>
              <span className="text-[1rem] font-normal text-center">Time In. Time Out. Right on Time.</span>
            </div>
            <LoginForm></LoginForm>

          </div>
      </div>

    </>
  )
}

export default login
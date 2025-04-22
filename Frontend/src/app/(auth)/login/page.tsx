'use client';
import React, { useActionState } from 'react'

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
            <div className="flex w-full">
              <form onSubmit={login} className="flex flex-col w-full gap-[1.5rem]">
                <div className="flex flex-col">
                    <label className="text-[1rem] font-bold">Username/Email</label>
                    <input type="text" name="email" placeholder="Enter your email" className="bg-[#F5F5F5] border border-[#E0E0E0] px-[1rem] py-[0.25rem] rounded-[0.25rem] outline-[#E0E0E0] text-[1rem]"/>
                </div>
                <div className="flex flex-col">
                    <label className="text-[1rem] font-bold">Password</label>
                    <input type="password" name="password" placeholder="Enter your password" className="bg-[#F5F5F5] border border-[#E0E0E0] px-[1rem] py-[0.25rem] rounded-[0.25rem] outline-[#E0E0E0] text-[1rem]"/>
                </div>
                <a className="w-full text-right text-[#498BFF] font-bold">Forgot Password?</a>
                <button className="bg-[#498BFF] text-[#ffffff] px-[1rem] py-[0.25rem] rounded-[0.25rem]" >Login</button>
                <span className="w-full text-center">OR</span>
                <button className="bg-[#ffffff] text-[#000000] px-[1rem] py-[0.25rem] rounded-[0.25rem] outline-[#E0E0E0] border border-[#E0E0E0]" >Sign In with Google</button>
              </form>
            </div>

          </div>
      </div>

    </>
  )
}

export default login
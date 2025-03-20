'use client';
import React from 'react'

const LoginForm = () => {
  return (
    <div className="flex w-full">
      <form className="flex flex-col w-full gap-[1.5rem]">
        <div className="flex flex-col">
            <label className="text-[1rem] font-bold">Email</label>
            <input type="email" name="email" placeholder="Enter your email" className="bg-[#F5F5F5] border border-[#E0E0E0] px-[1rem] py-[0.25rem] rounded-[0.25rem] outline-[#E0E0E0] text-[1rem]"/>
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
  )
}

export default LoginForm
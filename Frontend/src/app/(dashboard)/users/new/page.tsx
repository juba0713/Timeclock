import { LayoutDashboard } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="container max-w-full h-full flex flex-col p-[2.5rem] border-box text-[0.8rem] overflow-y-auto">
        <div className="w-full flex flex-col bg-white py-[1rem] px-[3rem] border-box border rounded-[0.25rem] border-none" >
          <span className="w-full text-center text-[1rem] py-[0.5rem]">Create User</span>
          <div className="w-full flex flex-row">
            <label className="px-[1rem] py-[0.5rem] w-full box-border border border-[#E0E0E0] flex justify-center items-center">User Information</label>
          </div>
          <div className="w-full flex flex-row">
            <label className="px-[1rem] py-[0.5rem] w-[20rem] box-border border border-[#E0E0E0] flex justify-center items-center">Email</label>
            <div className="px-[1rem] py-[0.5rem] box-border border border-[#E0E0E0] w-full ">
              <input type="email" placeholder="Enter email" className="w-[50%] text-[0.8rem]"/>
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="px-[1rem] py-[0.5rem] w-[20rem] box-border border border-[#E0E0E0] flex justify-center items-center">Full Name</label>
            <div className="px-[1rem] py-[0.5rem] box-border border border-[#E0E0E0] w-full flex gap-[1rem]">
              <input type="email" placeholder="Enter First Name]" className="w-[30%]"/>
              <input type="email" placeholder="Enter Middle Name]" className="w-[30%]"/>
              <input type="email" placeholder="Enter Last Name]" className="w-[30%]"/>
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="px-[1rem] py-[0.5rem] w-[20rem] box-border border border-[#E0E0E0] flex justify-center items-center">Birth Date</label>
            <div className="px-[1rem] py-[0.5rem] box-border border border-[#E0E0E0] w-full flex gap-[1rem]">
              <input type="date" className="w-[30%]"/>
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="px-[1rem] py-[0.5rem] w-[20rem] box-border border border-[#E0E0E0] flex justify-center items-center">Gender</label>
            <div className="px-[1rem] py-[0.5rem] box-border border border-[#E0E0E0] w-full flex gap-[1rem]">
              <select className="w-[30%]">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="px-[1rem] py-[0.5rem] w-[20rem] box-border border border-[#E0E0E0] flex justify-center items-center">Employee Status</label>
            <div className="px-[1rem] py-[0.5rem] box-border border border-[#E0E0E0] w-full flex gap-[1rem]">
              <select className="w-[30%]">
                <option>Select Status</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Outsource</option>
              </select>
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="px-[1rem] py-[0.5rem] w-[20rem] box-border border border-[#E0E0E0] flex justify-center items-center">Hire Date</label>
            <div className="px-[1rem] py-[0.5rem] box-border border border-[#E0E0E0] w-full flex gap-[1rem]">
              <input type="date" className="w-[30%]"/>
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="px-[1rem] py-[0.5rem] w-[20rem] box-border border border-[#E0E0E0] flex justify-center items-center">Team</label>
            <div className="px-[1rem] py-[0.5rem] box-border border border-[#E0E0E0] w-full flex gap-[1rem]">
              <select className="w-[30%]">
                <option>Select Team</option>
              </select>
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="px-[1rem] py-[0.5rem] w-[20rem] box-border border border-[#E0E0E0] flex justify-center items-center">User Role</label>
            <div className="px-[1rem] py-[0.5rem] box-border border border-[#E0E0E0] w-full flex gap-[1rem]">
              <select className="w-[30%]">
                <option>Select Role</option>
                <option>User</option>
                <option>Manager</option>
              </select>
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="px-[1rem] py-[0.5rem] w-full box-border border border-[#E0E0E0] flex justify-center items-center">Account Information</label>
          </div>
          <div className="w-full flex flex-row">
            <label className="px-[1rem] py-[0.5rem] w-[20rem] box-border border border-[#E0E0E0] flex justify-center items-center">Username</label>
            <div className="px-[1rem] py-[0.5rem] box-border border border-[#E0E0E0] w-full flex items-center flex-row gap-[1rem]">
              <input type="text" placeholder="Enter username" className="w-[50%] text-[0.8rem]"/>
              <div className="flex gap-[0.5rem]">
                <input type="checkbox" />
                <label>Use Email</label>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="px-[1rem] py-[0.5rem] w-[20rem] box-border border border-[#E0E0E0] flex justify-center items-center">Password</label>
            <div className="px-[1rem] py-[0.5rem] box-border border border-[#E0E0E0] w-full ">
              <input type="password" placeholder="Enter password" className="w-[50%] text-[0.8rem]"/>
            </div>
          </div>
          <div className="w-full flex justify-end py-[0.5rem] box-border">
            <div className="flex gap-[0.5rem]">
              <Link className="action-btn cancel"href="/dashboard">Cancel</Link>
              <Link className="action-btn back"href="/users">Back</Link>
              <button className="action-btn create">Create</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
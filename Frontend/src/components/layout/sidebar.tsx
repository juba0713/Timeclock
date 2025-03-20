'use client';
import React from 'react'
import { Clock, Image, LayoutDashboard, CalendarSync , CalendarCog, CalendarX2, Cog , Users, Group } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from "next/navigation";



const Sidebar = () => {

    const pathname = usePathname();
    
    const title = pathname.split("/").filter(Boolean).pop()?.replace(/^\w/, (c) => c.toUpperCase());

  return (
    <>
        <nav className="flex flex-col w-[18rem] bg-white overflow-y-auto scroll-p-[0.05rem] scroll-m-[0.05rem]">
            <div className="flex flex-col justify-center items-center box-border py-[2rem] px-[1rem]">
                <Image size={40} color="black" className="text-gray-600"/>
                <span>Julius Basas</span>
                <label className="text-[0.8rem]">Employee</label>
            </div>
            <hr className="w-[75%] mx-auto text-[#E0E0E0]"/>
            <div className="flex flex-col gap-1 box-border px-[1rem] py-[0.5rem]">
                <label className="text-[0.8rem] text-[#498BFF] font-bold">Dashboard</label>
                <Link href="/dashboard" className={`flex gap-[0.25rem] text-[1rem] justify-left items-center py-[0.25rem] px-[0.5rem] box-border rounded-[0.25rem] text-center hover:bg-[#498BFF] hover:text-[#ffffff] ${
                    title === 'Dashboard' ? 'bg-[#498BFF] text-white' : ''}`}><LayoutDashboard size={20}/>Dashboard</Link>
            </div>
            <hr className="w-[75%] mx-auto text-[#E0E0E0]"/>
            <div className="flex flex-col gap-1 box-border px-[1rem] py-[0.5rem]">
                <label className="text-[0.8rem] text-[#498BFF] font-bold">Time Clock</label>
                <Link href="/timeclock" className={`flex gap-[0.25rem] text-[1rem] justify-left items-center py-[0.25rem] px-[0.5rem] box-border rounded-[0.25rem] text-center hover:bg-[#498BFF] hover:text-[#ffffff] ${
                    title === 'Timeclock' ? 'bg-[#498BFF] text-white' : ''}`}><Clock size={20}/>Time Clock</Link>
            </div>
            <hr className="w-[75%] mx-auto text-[#E0E0E0]"/>
            <div className="flex flex-col gap-1 box-border px-[1rem] py-[0.5rem]">
                <label className="text-[0.8rem] text-[#498BFF] font-bold">Time Change</label>
                <a className="flex gap-[0.25rem] text-[1rem] justify-left items-center py-[0.25rem] px-[0.5rem] box-border rounded-[0.25rem] text-center hover:bg-[#498BFF] hover:text-[#ffffff]"><CalendarSync   size={20}/>Time Change</a>
            </div>
            <hr className="w-[75%] mx-auto text-[#E0E0E0]"/>
            <div className="flex flex-col gap-1 box-border px-[1rem] py-[0.5rem]">
                <label className="text-[0.8rem] text-[#498BFF] font-bold">Time Off</label>
                <a className="flex gap-1 text-[1rem] justify-left items-center py-[0.25rem] px-[0.5rem] box-border rounded-[0.25rem] text-center hover:bg-[#498BFF] hover:text-[#ffffff]"><CalendarX2  size={20}/>Time Off Request</a>
                <a className="flex gap-[0.25rem] text-[1rem] justify-left items-center py-[0.25rem] px-[0.5rem] box-border rounded-[0.25rem] text-center hover:bg-[#498BFF] hover:text-[#ffffff]"><CalendarCog  size={20}/>Time Off Control</a>
            </div>
            <hr className="w-[75%] mx-auto text-[#E0E0E0]"/>
            <div className="flex flex-col gap-1 box-border px-[1rem] py-[0.5rem]">
                <label className="text-[0.8rem] text-[#498BFF] font-bold">Role Management</label>
                <a className="flex gap-[0.25rem] text-[1rem] justify-left items-center py-[0.25rem] px-[0.5rem] box-border rounded-[0.25rem] text-center hover:bg-[#498BFF] hover:text-[#ffffff]"><Cog size={20}/>Roles</a>
            </div>
            <hr className="w-[75%] mx-auto text-[#E0E0E0]"/>
            <div className="flex flex-col gap-1 box-border px-[1rem] py-[0.5rem]">
                <label className="text-[0.8rem] text-[#498BFF] font-bold">User Management</label>
                <a className="flex gap-[0.25rem] text-[1rem] justify-left items-center py-[0.25rem] px-[0.5rem] box-border rounded-[0.25rem] text-center hover:bg-[#498BFF] hover:text-[#ffffff]"><Users size={20}/>Users</a>
            </div>
            <hr className="w-[75%] mx-auto text-[#E0E0E0]"/>
            <div className="flex flex-col gap-1 box-border px-[1rem] py-[0.5rem]">
                <label className="text-[0.8rem] text-[#498BFF] font-bold">Team Management</label>
                <a className="flex gap-[0.25rem] text-[1rem] justify-left items-center py-[0.25rem] px-[0.5rem] box-border rounded-[0.25rem] text-center hover:bg-[#498BFF] hover:text-[#ffffff]"><Group  size={20}/>Teams</a>
            </div>
            <hr className="w-[75%] mx-auto text-[#E0E0E0]"/>
            <div className="flex flex-col gap-1 box-border px-[1rem] py-[0.5rem]">
                <label className="text-[0.8rem] text-[#498BFF] font-bold">Team Management</label>
                <a className="flex gap-[0.25rem] text-[1rem] justify-left items-center py-[0.25rem] px-[0.5rem] box-border rounded-[0.25rem] text-center hover:bg-[#498BFF] hover:text-[#ffffff]"><LayoutDashboard size={20}/>Teams</a>
            </div>
            <hr className="w-[75%] mx-auto text-[#E0E0E0]"/>
            <div className="flex flex-col gap-1 box-border px-[1rem] py-[0.5rem]">
                <label className="text-[0.8rem] text-[#498BFF] font-bold">Team Management</label>
                <a className="flex gap-[0.25rem] text-[1rem] justify-left items-center py-[0.25rem] px-[0.5rem] box-border rounded-[0.25rem] text-center hover:bg-[#498BFF] hover:text-[#ffffff]"><LayoutDashboard size={20}/>Teams</a>
            </div>
            <hr className="w-[75%] mx-auto text-[#E0E0E0]"/>
            <div className="flex flex-col gap-1 box-border px-[1rem] py-[0.5rem]">
                <label className="text-[0.8rem] text-[#498BFF] font-bold">Team Management</label>
                <a className="flex gap-[0.25rem] text-[1rem] justify-left items-center py-[0.25rem] px-[0.5rem] box-border rounded-[0.25rem] text-center hover:bg-[#498BFF] hover:text-[#ffffff]"><LayoutDashboard size={20}/>Teams</a>
            </div>
            <hr className="w-[75%] mx-auto text-[#E0E0E0]"/>
            <div className="flex flex-col gap-1 box-border px-[1rem] py-[0.5rem]">
                <label className="text-[0.8rem] text-[#498BFF] font-bold">Team Management</label>
                <a className="flex gap-[0.25rem] text-[1rem] justify-left items-center py-[0.25rem] px-[0.5rem] box-border rounded-[0.25rem] text-center hover:bg-[#498BFF] hover:text-[#ffffff]"><LayoutDashboard size={20}/>Teams</a>
            </div>
        </nav>
    </>
  )
}

export default Sidebar
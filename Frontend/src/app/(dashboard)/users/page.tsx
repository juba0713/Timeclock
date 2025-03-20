import UserTable from '@/components/table/user-table'
import { Plus, ArrowLeft, ArrowRight  } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="container max-w-full h-full flex flex-col p-[2.5rem] border-box text-[0.8rem]">
        <div className="w-full flex flex-col bg-white py-[1rem] px-[3rem] border-box border rounded-[0.25rem] border-none" > 
          <div className="flex flex-row justify-between items-center py-[1rem] border-box">
            <div></div>
            <div className="flex flex-row justify-between items-center gap-[0.5rem]">
              <select>
                <option>Select Status</option>           
              </select>
              <Link href="/users/new" className="action-btn"><Plus size={16}/> New</Link>
            </div>
          </div>
          <UserTable />
          <div className="flex flex-row justify-between items-center py-[1rem] border-box">
            <div>
              <label>Showing 1 - 1 of 1 requests</label>
            </div>
            <div className="flex flex-row gap-[0.5rem]">
              <button className="action-btn "><ArrowLeft size={16}/>Prev</button>
              <select>
                <option>1</option>
              </select>
              <button className="action-btn ">Next<ArrowRight size={16}/></button>
            </div>
          </div>
          <hr className="w-full mx-auto text-[#E0E0E0]"/>
          <div className="flex flex-row justify-between items-center py-[1rem] border-box">
              <div className="flex flex-row gap-[0.25rem] items-center">
                <label>Rows per page</label>
                <select>
                  <option>5</option>
                </select>
              </div>
              <div className="flex flex-row gap-[0.5rem] items-center">
                <label>Skip to page</label>
                <input className="w-[4rem] text-center" type="text" placeholder="page"/>
                <button className="action-btn ">Skip<ArrowRight size={16}/></button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
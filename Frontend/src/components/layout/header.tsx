import React from 'react'
import { Settings, Bell} from 'lucide-react';


const Header = () => {
  return (
    <>
        <nav className="w-full flex flex-row justify-between box-border px-[1rem] py-[1rem] bg-[#4D8BFF] h-[3rem]">
            <div>
                <span>Timeclock</span>
            </div>
            <div className="flex flex-row items-center gap-[1rem]">
                <div className="bg-[#ffffff] text-[1rem] px-[0.5rem] py-[0.05rem] rounded-[0.25rem] box-border h-[1.5rem] flex justify-center items-center">
                    00 : 00 : 00
                </div>
                <Settings size={24} color="white" className="text-gray-600" />
                <Bell size={24} color="white"/>
            </div>
        </nav>
    
    </>
  )
}

export default Header
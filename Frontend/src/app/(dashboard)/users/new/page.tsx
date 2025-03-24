'use client';
import { saveUser, SaveUserParams } from '@/api/user/saveUser';
import { HttpStatus } from '@/constants/httpStatus';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {

  const [formData, setFormData] = useState<SaveUserParams>({
    email: '',
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    employeeStatus: '',
    hireDate: '',
    team: '',
    userRole: '',
    username: '',
    password: '',
    useEmail: false
  })

  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await saveUser(formData);
      if (result.status == HttpStatus.CREATED) {
        console.log('User created successfully!');
        setTimeout(() => {
          router.push('/users?status=success');
        }, 3000);
      } else if(result.status == HttpStatus.UNPROCESSABLE_ENTITY){
        console.log(result.errors);
        setErrors(result.errors);
        setIsSubmitting(false);
      } else {
        console.log('Failed to create user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <>
      <form onSubmit={handleSubmit} className="container max-w-full h-full flex flex-col p-[2.5rem] border-box text-[0.8rem] overflow-y-auto">
        <div className="w-full flex flex-col bg-white py-[1rem] px-[3rem] border-box border rounded-[0.25rem] border-none" >
          {/* <span className="w-full text-center text-[1rem] py-[0.5rem]">Create User</span> */}
          <div className="w-full flex flex-row ">
            <label className="text-[#498BFF] font-bold px-[1rem] py-[0.5rem] w-full box-border border border-[#E0E0E0] rounded-t-[0.25rem] flex justify-center items-center">User Information</label>
          </div>
          <div className="w-full flex flex-row">
            <label className="text-[#498BFF] font-bold px-[1rem] py-[0.5rem] w-[20rem] box-border border-y-0 border-l border-b border-r border-[#E0E0E0] flex justify-center items-center">Email</label>
            <div className="px-[1rem] py-[0.5rem] box-border border-y-0 border-l-0 border-r border-b border-[#E0E0E0] w-full ">
              <div>
                <input type="email" placeholder="Enter email" className="w-[50%] text-[0.8rem]"/>
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 text-[0.7rem]">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="text-[#498BFF] font-bold px-[1rem] py-[0.5rem] w-[20rem] box-border border-y-0 border-l border-b border-r border-[#E0E0E0] flex justify-center items-center">Full Name</label>
            <div className="px-[1rem] py-[0.5rem] box-border border-y-0 border-l-0 border-r border-b border-[#E0E0E0] w-full flex gap-[1rem]">
              <div className="flex flex-col w-[30%]">
                <input type="text" placeholder="Enter First Name]" className="w-full"/>
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1 text-[0.7rem]">{errors.firstName}</p>
                )}
              </div>
              <div className="flex flex-col w-[30%]">
                <input type="text" placeholder="Enter Middle Name]" className="w-full"/>
                {errors.middleName && (
                  <p className="text-red-500 text-sm mt-1 text-[0.7rem]">{errors.middleName}</p>
                )}
              </div>
              <div className="flex flex-col w-[30%]">
                <input type="text" placeholder="Enter Last Name]" className="w-full"/>
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1 text-[0.7rem]">{errors.lastName}</p>
                )}
              </div>              
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="text-[#498BFF] font-bold px-[1rem] py-[0.5rem] w-[20rem] box-border border-y-0 border-l border-b border-r border-[#E0E0E0] flex justify-center items-center">Birth Date</label>
            <div className="px-[1rem] py-[0.5rem] box-border border-y-0 border-l-0 border-r border-b border-[#E0E0E0] w-full flex flex-col">
              <div className="w-[30%]">
                <input type="date" className="w-full"/>
              </div>
              {errors.birthDate && (
                <p className="text-red-500 text-sm mt-1 text-[0.7rem]">{errors.birthDate}</p>
              )}
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="text-[#498BFF] font-bold px-[1rem] py-[0.5rem] w-[20rem] box-border border-y-0 border-l border-b border-r border-[#E0E0E0] flex justify-center items-center">Gender</label>
            <div className="px-[1rem] py-[0.5rem] box-border border-y-0 border-l-0 border-r border-b border-[#E0E0E0] w-full flex flex-col">
              <div className="w-[30%]">
                <select className="w-full" defaultValue={""}>
                  <option value="" disabled hidden>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              {errors.gender && (
                <p className="text-red-500 text-sm mt-1 text-[0.7rem]">{errors.gender}</p>
              )}
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="text-[#498BFF] font-bold px-[1rem] py-[0.5rem] w-[20rem] box-border border-y-0 border-l border-b border-r border-[#E0E0E0] flex justify-center items-center">Employee Status</label>
            <div className="px-[1rem] py-[0.5rem] box-border border-y-0 border-l-0 border-r border-b border-[#E0E0E0] w-full flex flex-col">
              <div className="w-[30%]">
                <select className="w-full" defaultValue={""}>
                  <option value="" disabled hidden>Select Status</option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Outsource</option>
                </select>
              </div> 
              {errors.employeeStatus && (
                <p className="text-red-500 text-sm mt-1 text-[0.7rem]">{errors.employeeStatus}</p>
              )} 
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="text-[#498BFF] font-bold px-[1rem] py-[0.5rem] w-[20rem] box-border border-y-0 border-l border-b border-r border-[#E0E0E0] flex justify-center items-center">Hire Date</label>
            <div className="px-[1rem] py-[0.5rem] box-border border-y-0 border-l-0 border-r border-b border-[#E0E0E0] w-full flex flex-col">
              <div className="w-[30%]">
                <input type="date" className="w-full"/>
              </div> 
              {errors.hireDate && (
                <p className="text-red-500 text-sm mt-1 text-[0.7rem]">{errors.hireDate}</p>
              )}        
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="text-[#498BFF] font-bold px-[1rem] py-[0.5rem] w-[20rem] box-border border-y-0 border-l border-b border-r border-[#E0E0E0] flex justify-center items-center">Team</label>
            <div className="px-[1rem] py-[0.5rem] box-border border-y-0 border-l-0 border-r border-b border-[#E0E0E0] w-full flex flex-col">
              <div className="w-[30%]">
                <select className="w-full" defaultValue={""}>
                  <option value="" disabled hidden>Select Team</option>
                </select>
              </div> 
              {errors.team && (
                <p className="text-red-500 text-sm mt-1 text-[0.7rem]">{errors.team}</p>
              )}        
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="text-[#498BFF] font-bold px-[1rem] py-[0.5rem] w-[20rem] box-border border-y-0 border-l border-b border-r border-[#E0E0E0] flex justify-center items-center">User Role</label>
            <div className="px-[1rem] py-[0.5rem] box-border border-y-0 border-l-0 border-r border-b border-[#E0E0E0] w-full flex flex-col">
              <div className="w-[30%]">
                <select className="w-full" defaultValue={""}>
                  <option value="" className="text-gray-50" disabled hidden>Select Role</option>
                  <option className="text-black">User</option>
                  <option className="text-black">Manager</option>
                </select>
              </div>   
              {errors.userRole && (
                <p className="text-red-500 text-sm mt-1 text-[0.7rem]">{errors.userRole}</p>
              )} 
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="text-[#498BFF] font-bold px-[1rem] py-[0.5rem] w-full box-border border-y-0 border-l border-b border-r border-[#E0E0E0] flex justify-center items-center">Account Information</label>
          </div>
          <div className="w-full flex flex-row">
            <label className="text-[#498BFF] font-bold px-[1rem] py-[0.5rem] w-[20rem] box-border border-y-0 border-l border-b border-r border-[#E0E0E0] flex justify-center items-center">Username</label>
            <div className="px-[1rem] py-[0.5rem] box-border border-y-0 border-l-0 border-r border-b border-[#E0E0E0] w-full flex flex-col">
              <div className="w-full flex items-center flex-row gap-[1rem]">
                <input type="text" placeholder="Enter username" className="w-[50%] text-[0.8rem]"/>
                <div className="flex gap-[0.5rem]">
                  <input type="checkbox" />
                  <label>Use Email</label>
                </div>
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm mt-1 text-[0.7rem]">{errors.username}</p>
              )}
            </div>
          </div>
          <div className="w-full flex flex-row">
            <label className="text-[#498BFF] font-bold px-[1rem] py-[0.5rem] w-[20rem] box-border border-y-0 border-l border-b border-r border-[#E0E0E0] rounded-bl-[0.25rem] flex justify-center items-center">Password</label>
            <div className="px-[1rem] py-[0.5rem] box-border border-y-0 border-l-0 border-r border-b border-[#E0E0E0] rounded-br-[0.25rem] w-full ">
              <div className="w-[50%]">
                <input type="password" placeholder="Enter password" className="w-full text-[0.8rem]"/>
              </div>  
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 text-[0.7rem]">{errors.password}</p>
              )} 
            </div>
          </div>
          <div className="w-full flex justify-end py-[0.5rem] box-border">
            <div className="flex gap-[0.5rem]">
              <Link className="action-btn cancel"href="/dashboard">Cancel</Link>
              <Link className="action-btn back"href="/users">Back</Link>
              <button className="action-btn create" disabled={isSubmitting}>{isSubmitting ? 'Saving...' : 'Save'}</button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default page
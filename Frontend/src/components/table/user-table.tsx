'use client';
import Loading from '@/app/loading'
import { UserRound } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const UserTable = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
          // Simulate fetch delay
          await new Promise((resolve) => setTimeout(resolve, 2000))
          //setUsers(['User 1', 'User 2', 'User 3']) // Replace with actual API call
          setLoading(false)
        }
        fetchData()
      }, [])

    if (loading) {
        return <Loading/>
    }

    return (
        <>
            <div className="w-full rounded-[0.25rem] border border-[#E0E0E0] px-[0.5rem]">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>
                                <div className="th-content">
                                    <UserRound size={16}/>
                                    <span>Full Name</span>
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    <UserRound size={16}/>
                                    <span>Manager</span>
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    <UserRound size={16}/>
                                    <span>Team</span>
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    <UserRound size={16}/>
                                    <span>Role</span>
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    <UserRound size={16}/>
                                    <span>Status</span>
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    <UserRound size={16}/>
                                    <span>Action</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Julius Basas</td>
                            <td>SuperAdmin</td>
                            <td>Team Admin</td>
                            <td>Admin</td>
                            <td>Active</td>
                            <td>
                                Action
                            </td>
                        </tr>
                        <tr>
                            <td>Julius Basas</td>
                            <td>SuperAdmin</td>
                            <td>Team Admin</td>
                            <td>Admin</td>
                            <td>Active</td>
                            <td>
                                Action
                            </td>
                        </tr>
                        <tr>
                            <td>Julius Basas</td>
                            <td>SuperAdmin</td>
                            <td>Team Admin</td>
                            <td>Admin</td>
                            <td>Active</td>
                            <td>
                                Action
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserTable
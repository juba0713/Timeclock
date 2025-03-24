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

    const headers = ['Full Name', 'Manager', 'Team', 'Role', 'Status', 'Action'];
    const users = [
    { name: 'Julius Basas', manager: 'SuperAdmin', team: 'Team Admin', role: 'Admin', status: 'Active' },
    { name: 'Julius Basas', manager: 'SuperAdmin', team: 'Team Admin', role: 'Admin', status: 'Active' },
    { name: 'Julius Basas', manager: 'SuperAdmin', team: 'Team Admin', role: 'Admin', status: 'Active' },
    ];

    return (
        <>
            <div className="w-full rounded-[0.25rem] border border-[#E0E0E0] px-[0.5rem]">
                <table className="w-full">
                    <thead>
                        <tr>
                            {headers.map((header) => (
                                <th key={header}>
                                    <div className="th-content">
                                    <UserRound size={16} />
                                    <span>{header}</span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                            <td colSpan={headers.length} className="text-center py-4">Loading...</td>
                            </tr>
                        ) : (
                            users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.manager}</td>
                                <td>{user.team}</td>
                                <td>{user.role}</td>
                                <td>{user.status}</td>
                                <td>Action</td>
                            </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserTable
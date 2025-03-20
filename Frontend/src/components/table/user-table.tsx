import { UserRound } from 'lucide-react'
import React from 'react'

const UserTable = () => {
  return (
    <>
        <div className="w-full rounded-[0.25rem] border border-[#E0E0E0] px-[0.5rem]">
            <table className="w-full">
                <thead>
                    <tr>
                        <th>
                            <div className="th-content">
                                <UserRound size={24}/>
                                <span>Full Name</span>
                            </div>
                         </th>
                         <th>
                            <div className="th-content">
                                <UserRound size={24}/>
                                <span>Manager</span>
                            </div>
                         </th>
                         <th>
                            <div className="th-content">
                                <UserRound size={24}/>
                                <span>Team</span>
                            </div>
                         </th>
                         <th>
                            <div className="th-content">
                                <UserRound size={24}/>
                                <span>Role</span>
                            </div>
                         </th>
                         <th>
                            <div className="th-content">
                                <UserRound size={24}/>
                                <span>Status</span>
                            </div>
                         </th>
                         <th>
                            <div className="th-content">
                                <UserRound size={24}/>
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

import React from 'react'
import { CheckBox } from './Pagination/CheckBox/CheckBox'
import { Pagination } from './Pagination/Pagination'
import classes from './Table.module.css'

export const Table = ({users}) => {

    return (
        <div className={classes.container}>
            <CheckBox />
           <table className={classes.styledTable}>
    <thead>
        <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>State</th>
        </tr>
    </thead>
    <tbody>
        {users.map(user => (
            <tr key={user.phone}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            {/* <td>{user.id}</td> */}
        </tr>
        ))}
        

    </tbody>
</table> 
        <Pagination />
        </div>
    )
}

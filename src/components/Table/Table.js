import React from 'react'
import classes from './Table.module.css'

export const Table = () => {
    return (
        <div className={classes.container}>
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
        <tr>
            <td>1</td>
            <td>Bogdan</td>
            <td>Veretelnik</td>
            <td>bveretelnik@gmail.com</td>
            <td>+380931202410</td>
            <td>Male</td>
        </tr>
        <tr className={classes.activeRow}>
            <td>2</td>
            <td>Iryna</td>
            <td>Hranetska</td>
            <td>ih@gmail.com</td>
            <td>+380631302410</td>
            <td>Male</td>
        </tr>

    </tbody>
</table> 
        </div>
    )
}

import React from 'react'
import classes from './Header.module.css'

export const Header = () => {
    return (
        <div className={classes.container}>
            <div>
            <h2>Get start to search users</h2>
            </div>
            <button className={classes.btn}>Search the users</button>
        </div>
    )
}

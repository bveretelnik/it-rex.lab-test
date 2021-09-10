import React from 'react'
import classes from './Pagination.module.css'

export const Pagination = () => {
    return (
        <div className={classes.pagination}>
  <a href="/">«</a>
  <a href="/">1</a>
  <a href="/" className={classes.active}>2</a>
  <a href="/">3</a>
 
  <a href="/">»</a>
</div>
    )
}

import React,{useState} from 'react'
import classes from './Description.module.css'

export const Description = () => {
    const [state, setState] = useState(false)
    return (
        <>
        <button onClick={() => setState(true)}>click</button>
        {state && (
            <div  className={classes.overlay} onClick={() => setState(false)}>
	<div className={classes.popup}onClick={e => e.stopPropagation()}>
		<h2>Here i am</h2>
		<span className={classes.close} onClick={() => setState(false)}>&times;</span>
		<div className={classes.content}>
			Thank to pop me out of that button, but now i'm done so you can close this window.
		</div>
	</div>
</div>
        )}
        
</>
    )
}

import classes from './Button.module.css'

import {GrNext} from 'react-icons/gr'

const Button = () => {
    return (
        <div>
            <button className={classes.button}>
                Get Started
                <div>
                    <GrNext/>
                    <GrNext/>
                </div>
            </button>
        </div>

    )
}

export default Button
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    button: {
        backgroundColor: (styleProp) => styleProp.bgColor ? styleProp.bgColor : '#3B833A',
        padding: '15px 15px',
        width: (styleProp) => styleProp.width ? styleProp.width : '100%',
        color: (styleProp) => styleProp.color ? styleProp.color : 'white',
        fontSize: '16px',
        letterSpacing: '1px',
        outline: 'none',
        border: ' none',
        cursor: 'pointer',
        display: 'block',
        transition: 'all 0.5s ease',
        '&:hover': {
            transform: 'scale(1.02)'
        }
    },
}));

const Button = ({ innerText, type, HandleButtonClick, color, bgColor, width, disabled }) => {
    const styleProp = {
        color,
        bgColor,
        width
    }
    const classes = useStyles(styleProp);
    return (
        <button className={classes.button} type={type} onClick={HandleButtonClick} disabled={disabled}>
            {innerText}
        </button>
    );
}

export default React.memo(Button);
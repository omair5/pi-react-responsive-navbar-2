import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(() => ({
    circular: {
        color: 'white',
        height: '15px'
    },
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.5s ease-in-out',
        "& div": {
            marginRight: '5px'
        },
        '&:hover': {
            transform: 'scale(1.01)'
        }
    },
}));

const Button = ({ innerText, type, HandleButtonClick, color, bgColor, width, disabled, icon, circularProgress }) => {
    const styleProp = {
        color,
        bgColor,
        width
    }
    const classes = useStyles(styleProp);
    return (
        <button className={classes.button} type={type} onClick={HandleButtonClick} disabled={disabled}>
            {
                (icon && !circularProgress) && <div>{icon}</div>
            }
            {circularProgress ? <CircularProgress className={classes.circular} size={25} /> : innerText}
        </button>
    );
}

export default React.memo(Button);
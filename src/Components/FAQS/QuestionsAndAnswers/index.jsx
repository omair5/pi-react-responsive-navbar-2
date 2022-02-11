import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import styles from './index.module.css'
import { FaqsList } from '../../../JsUtils/FaqsList'

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        padding: '0.75rem 1.25rem',
        borderRadius: '5px',
        backgroundColor: 'rgba(0,0,0,.03)',
        borderBottom: '1px solid rgba(0,0,0,.125)',
        transition: 'all 1s ease',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        marginBottom: -1,
        minHeight: 56,
        fontWeight: 400,
        color: '#009a54',
        backgroundColor: 'transparent',
        letterSpacing: '1px',
        fontSize: '17px',
        "&:hover": {
            textDecoration: 'underline'
        },
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        color: '#484e53',
    },
}))(MuiAccordionDetails);


function QuestionsAndAnswers() {
    const [expanded, setExpanded] = React.useState('panel1d-header');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className={styles.mainContainer} style={{ zIndex: '-200' }}>
            {
                FaqsList.map((value) => (
                    <Accordion square expanded={expanded === `${value.panel}`} onChange={handleChange(value.panel)} key={value.panel} >
                        <AccordionSummary id={value.panel}>
                            <Typography>{value.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography dangerouslySetInnerHTML={{ __html: `${value.detail}` }}></Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </div >
    );
}
export default React.memo(QuestionsAndAnswers)
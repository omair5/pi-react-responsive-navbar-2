import React from 'react'
import Grid from '@material-ui/core/Grid';
import PrimaryCard from '../../../Utils/PrimaryCard';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import { v4 as uuidv4 } from 'uuid';



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: '35px'
    },
}));

const CardsContainer = ({ data }) => {
    const classes = useStyles();
    // slicing the array for animation
    const row1 = data.slice(0, 2)
    const row2 = data.slice(2)
    return (
        <div className={classes.mainContainer}>
            <Grid container spacing={3}>
                {
                    row1.map((value) => (
                        <Slide direction="right" in={true} timeout={1500} mountOnEnter unmountOnExit key={uuidv4()}>
                            <Grid item xs={12} sm={12} md={6}>
                                <PrimaryCard
                                    heading={value.heading}
                                    description={value.description}
                                    Icon={value.Icon}
                                    external_link={value.external_link}
                                    text_color={value.text_color}
                                    Icon_Color={value.Icon_Color}

                                />
                            </Grid>
                        </Slide>
                    ))
                }
                {
                    row2.map((value) => (
                        <Slide direction="left" in={true} timeout={1500} mountOnEnter unmountOnExit key={uuidv4()}>
                            <Grid item xs={12} sm={12} md={6}>
                                <PrimaryCard
                                    heading={value.heading}
                                    description={value.description}
                                    Icon={value.Icon}
                                    external_link={value.external_link}
                                    text_color={value.text_color}
                                    Icon_Color={value.Icon_Color}

                                />
                            </Grid>
                        </Slide>
                    ))
                }
            </Grid>

        </div>
    );
}
export default React.memo(CardsContainer);
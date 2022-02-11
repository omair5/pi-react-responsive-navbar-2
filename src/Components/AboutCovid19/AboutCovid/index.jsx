import React from 'react'
import styles from './index.module.css'

const AboutCovid = () => {
    return (
        <div className={styles.mainContainer}>
            <p>
                It's likely that the Coronavirus Disease (COVID-19) originated in an animal species,
                and then spread to humans. Persons to person spread of the novel corona virus is
                reported, but it is not yet understood how easily this happens.
            </p>

            <p>
                Other human coronavirus strains are spread from person to person through contaminated
                droplets from a person who is sick with the illness (through coughing or sneezing)
                or contaminated hands.
            </p>

            <p className={styles.black_text}>
                To Know about COVID-19 please visit below mention link: <a href='https://covid.gov.pk/covid19' target='_blank'  rel="noreferrer" >CLICK HERE</a>
            </p>
        </div>
    );
}

export default React.memo(AboutCovid);
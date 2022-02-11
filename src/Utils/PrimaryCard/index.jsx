import React from 'react';
import Paper from '@material-ui/core/Paper';
import styles from './index.module.css';
import { Link } from '@material-ui/core';


const PrimaryCard = ({ heading, description, Icon, Icon_Color, external_link, bg_color, heading_color, text_color }) => {
    return (
        <Paper elevation={3} className={styles.paper} style={{ backgroundColor: bg_color }} >
            {/* icon */}
            <div className={styles.col1}>
                <Icon className={styles.icon_styles} style={{ color: Icon_Color }} />
            </div>

            <div className={styles.col2}>
                {/* heading */}
                <h2 style={{ color: heading_color }}>
                    {heading}
                </h2>

                {/* description */}
                <p style={{ color: text_color }}>
                    {external_link ?
                        <Link href={external_link} target="_blank" rel="noreferrer" style={{ color: text_color }}>
                            {description}
                        </Link>
                        :
                        <p dangerouslySetInnerHTML={{ __html: description }} style={{ color: text_color }}></p>
                    }
                </p>
            </div>
        </Paper>
    );
}
export default React.memo(PrimaryCard);
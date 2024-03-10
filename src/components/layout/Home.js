import React from 'react';

import Paper from '@mui/material/Paper';


import Image from '../../img/sky2.jpg'; // Import using relative path


const styles = {
    paperContainer: {
        minHeight: '100%',
        backgroundSize: 'cover',
        backgroundImage: `url(${Image})`,
        width:'max-width',
        height:'800px',

    }
};

export default class Home extends React.Component{
    render(){
        return(
            <Paper style={styles.paperContainer}>
                Some text to fill the Paper Component
            </Paper>
        )
    }
}
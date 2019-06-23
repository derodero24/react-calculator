import React from 'react';
import Box from '@material-ui/core/Box';

export default function Result({ result }) {
    return (
        <Box component='span'
            display='block'
            p={1} m={1}
            borderBottom={1}
            bgcolor='background.paper'
            textAlign='right'
            style={{ height: '32px'}}
            fontWeight="fontWeightMedium">
            {result}
        </Box>
    );
}

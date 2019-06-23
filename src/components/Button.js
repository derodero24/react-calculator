import React from 'react';
import ButtonMt from '@material-ui/core/Button';


export default function Button({ text, color = 'inherit', size = 1, onClick }) {
    return (
        <ButtonMt
            variant='outlined'
            size='large'
            color={color}
            style={{ width: (size * 24) + '%',
                     maxWidth: (size * 120) + 'px',
                     height: '100px',
                     margin: '0.2px'}}
            onClick={onClick}>
            {text}
        </ButtonMt>
    );
}

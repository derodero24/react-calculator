import React from 'react';
import ButtonMt from '@material-ui/core/Button';

export default function Button({ text, color = 'inherit', size = 1, onClick }) {
    return (
        <ButtonMt
            variant='contained'
            size='large'
            color={color}
            style={{ width: (size * 24) + '%',
                     maxWidth: (size * 100) + 'px',
                     height: '100px',
                     fontSize:'2em',
                     margin: '4px 0 0 0'}}
            onClick={onClick}>
            {text}
        </ButtonMt>
    );
}

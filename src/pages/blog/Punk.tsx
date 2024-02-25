import React from 'react';
import {Box} from '@mui/material';
import BlogPost from './Template.tsx'
import './blog.css'

const Content = () => (
    <>
    </>
)

const Drag = () => {
    return(<BlogPost title='What even is punk?' 
                     description='A profile of London Ian McGill, known professionally as London Lestrange. Based in Richmond, Virgina, he told me of the impact of drag culture and gaining confidence in his craft.'
                     image='punk'
                     content={<Content/>}
                     />
            )
}

export default Drag
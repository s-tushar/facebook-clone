import React from 'react'
import './Story.css';
import {Avatar} from '@material-ui/core';

const Story = ({image, profilrSrc, title}) => {
    console.log({image});
    return (
        <div style={{ backgroundImage: `url(${image})`}} className='story'>
            <Avatar src={profilrSrc} className='story_avatar'/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story

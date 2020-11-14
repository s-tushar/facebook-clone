import React, {useState} from 'react';
import './MessageSender.css';
import {Avatar} from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {
    const [input, setInput] = useState('');
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if (e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = () => {
        console.log("Submit clicked")
    }
    return (
        <div className='messageSender'>
            <div className='messageSender_top'>
                <Avatar src=''/>
                <form>
                    <input
                        type='text'
                        className='messageSender_input'
                        placeholder='whats on your mind? '
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                    />
                    <input 
                        type='file'
                        className='messageSender_fileSelector'
                        onChange={handleChange}
                    />
                    <button
                        onClick={handleSubmit}
                        type='submit'
                    >
                        Hidden Submit           
                    </button>
                </form>
            </div>
            <div className='messageSender_button'>

                <div className='messageSender_option'>
                    <VideocamIcon style={{color: 'red'}}>
                    </VideocamIcon>
                    <h3>Live Video</h3>
                </div>

                <div className='messageSender_option'>
                    <PhotoLibraryIcon style={{color: 'green'}}>
                    </PhotoLibraryIcon>
                    <h3>Photo/ Video</h3>
                </div>

                <div className='messageSender_option'>
                    <InsertEmoticonIcon style={{color: 'orange'}}>
                    </InsertEmoticonIcon>
                    <h3>Feeling/ Activity</h3>
                </div>

            </div>
        </div>
    )
}

export default MessageSender

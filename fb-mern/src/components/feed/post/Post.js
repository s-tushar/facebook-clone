import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Post = ({ profilePic, imagename, username, timestamp, message }) => {
    return (
        <div className='post'>
            <div className='post_top'>
                <Avatar src={profilePic} className='post_avatar' />
                <div className='post_topInfo'>
                    <h3>
                        {username}
                    </h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                </div>
            </div>
            <div className='post_message'>
                <p>{message}</p>
            </div>
            <div className='post_options'>
                <div className='post_option'>
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className='post_option'>
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className='post_option'>
                    <ShareIcon />
                    <p>Share</p>
                </div>
                <div className='post_option'>
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>
        </div>
    )
}

export default Post

import React from 'react'
import MessageSender from './Message-sender/MessageSender'
import Post from './post/Post'
import StoryReel from './storyreel/StoryReel'
import './Feed.css';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>

            <Post
            profilePic='https://media-exp1.licdn.com/dms/image/C5603AQHm2OVIPqE0Tg/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=fcrHb3wgSE-H1LfyjPG2F0VFO1HxW6X1BiLztL0YPnw'
            message='this is a message'
            timestamp='1601493943737'
            imageName='imageNAme'
            username='tushar'
            />

            {/* {
                postsData.map(entry => (
                    <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.username}
                    />
                ))
            }             */}


        </div>
    )
}

export default Feed

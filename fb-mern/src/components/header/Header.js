import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'
import FacebookIcon from '@material-ui/icons/Facebook';
import HomeIcon from '@material-ui/icons/Home';
import FlagSharpIcon from '@material-ui/icons/FlagSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import StorefrontSharpIcon from '@material-ui/icons/StorefrontSharp';
import SupervisedUserCircleSharpIcon from '@material-ui/icons/SupervisedUserCircleSharp';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';





function Header() {
    return (
        <div className='header'>

            <div className='header_left'>
                <FacebookIcon />
                <div className='header_input'>
                    <SearchIcon />
                    <input placeholder='Facebook Search'/>
                </div>
            </div>

            <div className='header_center'>
                <div className='header_option header_option_active'>
                    <HomeIcon fontSize='large' />
                </div>
                <div className='header_option'>
                    <FlagSharpIcon fontSize='large' />
                </div>
                <div className='header_option'>
                    <SubscriptionsSharpIcon font='large' />
                </div>
                <div className='header_option'>
                    <StorefrontSharpIcon fontSize='large' />
                </div>
                <div className='header_option'>
                    <SupervisedUserCircleSharpIcon fontSize='large' />
                </div>
            </div>

            <div className='header_right'>
                <div className='header_info'>
                    <Avatar alt="Remy Sharp" src="" />
                    <h4>Tushar Sonawane</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Header

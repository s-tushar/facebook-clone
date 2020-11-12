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



function Header() {
    return (
        <div className='herder'>
            <div className=''>
            <FacebookIcon/>
            </div>
            <div className=''>
                <SearchIcon/>
                <input/>
            </div>
            <div className='header_center'>
                <div className='header_option header_option_active'>
                    <HomeIcon fontsize='large'  />
                </div>
                <div className='header_option'>
                    <FlagSharpIcon fontsize='large'/>
                </div>
                <div className='header_option'>
                    <SubscriptionsSharpIcon font='large'/>
                </div>
                <div className='header_option'>
                    <StorefrontSharpIcon fontsize='large'/>
                </div>
                <div className='header_option'>
                    <SupervisedUserCircleSharpIcon fontsize='large'/>
                </div>
            </div>
            <div className='header_right'>
                <div className='header_info'>
                <Avatar alt="Remy Sharp" src="" />
                    <h4>Tushar Sonawane</h4>
                </div>

            </div>
        </div>
    )
}

export default Header

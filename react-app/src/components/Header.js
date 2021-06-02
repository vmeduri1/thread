import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import './Header.css';


function Header() {
    return (
        // BEM
        <div className='header'>
            <IconButton>
                <PersonIcon className='header___icon' fontSize='large'/>
            </IconButton>
            <img
                className='header___logo'
                src="https://cdn.designrush.com/uploads/inspirations/2354/crop_683_410__1513706350_604_tin.png"
                alt='tinder logo'
            />
            <IconButton>
                <ForumIcon className='header___icon' fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default Header

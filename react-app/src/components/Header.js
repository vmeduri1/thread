import React from 'react'
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import './Header.css';
import { LaptopWindowsRounded } from '@material-ui/icons';


function Header() {
    return (
        // BEM
        <div className='header'>
            <Link to="/profile">
                <IconButton>
                    <PersonIcon className='header___icon' fontSize='large'/>
                </IconButton>
            </Link>

            <Link to ="/tinder-cards">
                <img
                    className='header___logo'
                    src="https://cdn.designrush.com/uploads/inspirations/2354/crop_683_410__1513706350_604_tin.png"
                    alt='tinder logo'
                    onClick={"window.location.reload()"}
                />
            </Link>

            <Link to ='/matches'>
                <IconButton>
                    <ForumIcon onClick={"window.location.reload()"} className='header___icon' fontSize='large'/>
                </IconButton>
            </Link>

        </div>
    )
}

export default Header


import { CreditsBarTypes } from '../../Types/CreditsBarTypes/CreditsBarTypes';
import './CreditsBar.css';

const CreditsBar = ( { state, handleClose, handleFollow }: CreditsBarTypes ) => {
    return (
        <div className={ state ? `credits-bar--container` : `credits-bar--container--inactive` }>
            <div className='header-bar--container'>
                <p id='credits-text'>Welcome, we are Tomorrow, if you enjoy this project you can help us to spread this webpage design and provide future projects, make sure to share with your friends and follow us on our social medias. WIth love and respect, Tomorrow!</p>
            </div>
            <div className='buttons-bar--container'>
                <button id='follow-button' 
                        className='bar-button'
                        onClick={ handleFollow }>Follow</button>
            <button id='close-button' 
                    className='bar-button'
                    onClick={ handleClose }>Close</button>
            </div>
        </div>
    )
}

export default CreditsBar;

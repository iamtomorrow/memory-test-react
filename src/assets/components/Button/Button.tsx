
import './Buttons.css';

interface ButtonType {
    label: string;
    icon: string | null;
    onClickHandle: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ( { label, icon, onClickHandle }: ButtonType ) => {
    return (
        <button id={ `${label}-button` }
                className='control-button'
                onClick={ onClickHandle }>
            { icon && <img className='button-icon' src={ icon } alt=''/> }
            { label }
        </button>
    )
}

export default Button;

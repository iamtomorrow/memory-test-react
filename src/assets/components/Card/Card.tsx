
import './Card.css';
import { GridItemTypes } from '../../Types/GridItemTypes/GridItemTypes';
import React from 'react';

interface CardTypes {
    item: GridItemTypes;
    onClickHandler: React.MouseEventHandler<HTMLDivElement>;
}

const Card = ( { item, onClickHandler }: CardTypes ) => {
    return (
        <div key={ item.key }
             id={ item.id }
             className={ item.state === true ? 'card--active' : 'card--inactive' }
             onClick={ onClickHandler }>
            <img id={`icon-${item.id}`} 
                 className={ item.state === true ? 'card-icon--active' : 'card-icon--inactive'} 
                 src={ item.icon } /> 
        </div>
    )
}

export default Card;

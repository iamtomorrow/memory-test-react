
import './InfoItem.css';

interface InfoItemType {
    label: string;
    value: string;
}

const InfoItem = ( { label, value }: InfoItemType ) => {
    return (
        <div className='info-item--container'>
            <div className='info-item-label--container'>
                <p id='label'>{ label }</p>
            </div>
            <div className='info-item-value--container'>
                <h1 id='value'>{ value }</h1>
            </div>
        </div>
    )
}

export default InfoItem;

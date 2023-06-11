
import { useEffect, useState } from 'react'

import './App.css'
import { CounterDefaultFormat } from './assets/Types/CounterTypes/CounterTypes';

import Header from './assets/layouts/Header/Header';
import InfoItem from './assets/components/InfoItem/InfoItem';
import Button from './assets/components/Button/Button';

import StartIcon from './assets/images/play-mini-fill.svg';
import ResetIcon from './assets/images/refresh-line.svg';

import { GridItemTypes } from './assets/Types/GridItemTypes/GridItemTypes';
import { CardItems } from './assets/data/CardItems/CardItems';
import Card from './assets/components/Card/Card';
import CreditsBar from './assets/layouts/Credits/CreditsBar';

function App() {
  const [ gridPositions, setGridPositions ] = useState(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'])
  const [ playing, setPlaying ] = useState<boolean>(false);
  const [ timeElapsed, setTimeElapsed ] = useState<number>(0);
  const [ moveCount, setMoveCount ] = useState<number>(0);
  const [ quantityActive, setQuantityActive ] = useState<number>(0);
  const [ gridItems, setGridItems ] = useState<GridItemTypes[]>([]);
  const [ cards, setCards ] = useState<string[]>([]);
  const [ seconds, setSeconds ] = useState(0);
  const [ minutes, setMinutes ] = useState(0);
  const [ creditsBarState, setCreditsBarState ] = useState(true);

  // initiate the counter
  useEffect( () => {
    const timer = setInterval(() => {
      if (playing) {
        setTimeElapsed(timeElapsed+1);
      }
      console.log(timeElapsed);
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed, seconds, minutes]);

  // create the game layout
  useEffect( () => startHandler(), []);
  useEffect( () => randomizeGridPositions(), [playing]);
  // verify pattern of the movement
  useEffect( () => {
    if (quantityActive === 2) {
      let temporaryGrid = [...gridItems];
      let cardOneKey = temporaryGrid[parseInt(cards[0])].key;
      let cardTwoKey = temporaryGrid[parseInt(cards[1])].key;
      if (cardOneKey === cardTwoKey)  {
        // window.alert("we have a pattern");
        setCards([]);
        setMoveCount(moveCount+1);
        setQuantityActive(0);
        setGridItems(temporaryGrid);
      } else {
        setTimeout( () => {
          temporaryGrid[parseInt(cards[0])].state = false;
          temporaryGrid[parseInt(cards[1])].state = false;
          setCards([]);
          setMoveCount(moveCount+1);
          setQuantityActive(0);
          setGridItems(temporaryGrid);
        }, 1000)
      }
    }
  }, [quantityActive, gridItems]);
  // verify if game is over or not
  useEffect( () => {
    // window.alert(playing);
    if (gridItems.every(item => item.state === true) && playing) {
      setPlaying(false);
      setMoveCount(0)
      window.alert("Game is over!");
    }
  }, [quantityActive, playing]);

  // randomize grid positions
  const randomizeGridPositions = ( ) => {
    let temporaryGridPositions = [];
    temporaryGridPositions = gridPositions.sort(( a, b ) => Math.random() - 0.5);
    setGridPositions(temporaryGridPositions);
  }

  // start the game;
  const startHandler = ( ) => {
    // window.alert("starting the game...");
    let temporaryGrid: GridItemTypes[] = [];
    for (let i = 0; i <= 15; i++) {
      for (let e = 0; e <= 15; e++) {
        if (gridPositions[e] === `${i}`) {
          temporaryGrid.push({
            key: CardItems[e].key,
            id: CardItems[e].id,
            icon: Object.values(CardItems[e].icon)[0],
            state: false,
          })
        }
      }
    }
    setGridItems(temporaryGrid);
    setPlaying(true);
  }

  // reset the game;
  const resetHandler = ( ) => {
    // window.alert("reseting the game...");
    setPlaying(false);
    setTimeElapsed(0);
    setMoveCount(0);
    setQuantityActive(0);
    setSeconds(0);
    setMinutes(0);
    setGridItems([]);
    setCards([]);
  }

  const cardClickHandler = ( index:number ) => {
    if (quantityActive < 2 && gridItems[index].state === false) { 
      let temporaryGrid = [...gridItems];
      if (temporaryGrid[index].state === false) {
        temporaryGrid[index].state = true;
        setQuantityActive(quantityActive+1);
      }
      setGridItems(temporaryGrid);
      setCards([...cards, `${index}`]);
    }
  }

  // credits bar
  const handleCloseClick = ( ) => {
    setCreditsBarState(false);
  }
  const handleFollowClick = ( ) => {
    window.location.href ="https://instagram.com/desktechnologies/";
  }

  return (
    <div className='App'>
      <div className='top--container'>
        <Header />
        <div className='info--container'>
          <InfoItem label='time' value={ CounterDefaultFormat( timeElapsed ) } />
          <InfoItem label='moves' value={`${moveCount}`} />
        </div>
        <div className='buttons--container'>
          <Button label='start' icon={ StartIcon } onClickHandle={ startHandler } />
          <Button label='reset' icon={ ResetIcon } onClickHandle={ resetHandler } />
        </div>
      </div>
      <div className='bottom--container'>
        <div className='grid--container'>
          {
            playing && gridItems.map( (item:GridItemTypes, index:number) => (
              <Card key={ index }
                    item={ item }
                    onClickHandler={ () => cardClickHandler(index) } />
            ))
          }
        </div>
      </div>
      <CreditsBar state={ creditsBarState } 
                  handleClose={ handleCloseClick } 
                  handleFollow={ handleFollowClick } />
    </div>
  );
}

export default App

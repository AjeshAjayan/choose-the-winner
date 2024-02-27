import logo from './logo.svg';
import './App.css';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

const WINNERS = ['an._xz._', 'xlfiyaaa']

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [countDown, setCountDown] = useState(4);

  const [winner, setWinner] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000)

    setWinner(WINNERS[Math.floor(Math.random() * 2)])
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(c => {
        if(c - 1 > 0) {
          clearInterval(interval)
          return c - 1;
        };

        return c -1;
      })
    }, 1000)

    return () => clearInterval(interval);

  }, [countDown])

  return (
    <div className="App">
      {
        !isLoading &&
        <img style={{ position: 'absolute', zIndex: '2', width: '100%', height: '100%', left: '0' }} src='/Falling Confetti Happy Birthday Gif Pictures, Photos, And Images For  DDE.gif' />
      }
      <header style={{ position: 'relative' }} className="App-header">
        {
          countDown > 0 && <span style={{ position: 'absolute' }}> { countDown } </span>
        }
        {
          isLoading 
            ? <CircularProgress size={50} />
            : <span style={{ position: 'absolute', zIndex: '2', fontWeight: '1000', fontSize: '20vw' }}>
              { winner }
            </span>
        }
        {
          isLoading && <img style={{ position: 'absolute', bottom: '5rem' }} src='/party-popper-confetti.gif' />
        }
      </header>
    </div>
  );
}

export default App;

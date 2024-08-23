import React, { useState } from 'react';
import Header from './components/Header';
import AddCardButton from './components/AddCardButton';
import TrackTradesButton from './components/TrackTradesButton';
import WishlistButton from './components/WishlistButton';
import TextField from './components/TextField';
import RarityDistributionChart from './components/RarityDistributionChart';
import CollectionValueBarGraph from './components/CollectionValueBarGraph';

function App() {
  const [message, setMessage] = useState('');

  const handleAddCard = () => {
    setMessage('Add Card button clicked');
  };

  const handleTrackTrades = () => {
    setMessage('Track Trades button clicked');
  };

  const handleWishlist = () => {
    setMessage('Wishlist button clicked');
  };

  const appStyle = {
    backgroundColor: '#2c3e50', // Background color
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    color: '#fff',
    position: 'relative',
    textAlign: 'center',
  };

  const logoStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '900px', // Increase the size of the logos by another 300%
  };

  const leftLogoStyle = {
    ...logoStyle,
    left: '20px',
  };

  const rightLogoStyle = {
    ...logoStyle,
    right: '20px',
  };

  return (
    <div style={appStyle}>
      <img
        src={process.env.PUBLIC_URL + '/pokemon-logo.png.jpg'}
        alt="Pokemon Logo"
        style={leftLogoStyle}
      />
      <img
        src={process.env.PUBLIC_URL + '/pokemon-logo.png.jpg'}
        alt="Pokemon Logo"
        style={rightLogoStyle}
      />
      <Header />
      <TextField onEnter={() => { }} />
      <CollectionValueBarGraph />
      <AddCardButton onClick={handleAddCard} />
      <TrackTradesButton onClick={handleTrackTrades} />
      <WishlistButton onClick={handleWishlist} />
      <RarityDistributionChart />
      <div>{message}</div>
    </div>
  );
}

export default App;

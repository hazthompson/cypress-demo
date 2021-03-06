import './App.css';
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <FormControlLabel
          data-cy='ToggleLikeMe'
          control={
            <Checkbox
              icon={<FavoriteBorder className='svg_icons' />}
              checkedIcon={<Favorite className='svg_icons' />}
              name='checkedH'
            />
          }
          label='please like me'
        />
      </header>
    </div>
  );
}

export default App;

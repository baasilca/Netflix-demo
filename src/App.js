import React from 'react';
import NavBar from './Components/NavBar/NavBar.js';
import './App.css'
import Banner from './Components/Banner/Banner.js';
import RowPost from './Components/RowPost/RowPost.js';
import {originals,action} from './urls'
function App() {

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title={"Netflix Originals"} />
      <RowPost url={action} title={"Action Movie"} isSmall/>
    </div>
  );
}

export default App;
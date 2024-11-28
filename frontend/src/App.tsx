import React from 'react';
import './App.css';
import CardList from './Components/Card/CardList/CardList'; 
import Search from './Components/Card/Search/Search';


const App: React.FC = () => {
  return (
        <div className="App">
          <Search />
          <CardList />
        </div>
  )
};

export default App;

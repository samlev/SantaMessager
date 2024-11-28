import React, { ChangeEvent, SyntheticEvent } from 'react';
import './App.css';
import CardList from './Components/Card/CardList/CardList'; 
import Search from './Components/Card/Search/Search';



function App() {

    const [search, setSearch] = React.useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onClick = (e: SyntheticEvent) => {
      console.log(e)
    };

  return (
        <div className="App">
          <Search onClick={onClick} search={search} handleChange={handleChange}/>
          <CardList />
        </div>
  )
};

export default App;

import { render } from '@testing-library/react';
import Dropdown from './dropdown';
import './App.scss';

let title = 'Selecione seu pokemon';
let options = ['Charmander', 'Squirtle', 'Bulbasaur'];
let callback = () => {};

function App() {
  const changeSelection = (value) => {
    console.log(value);
  };

  return (
    <div className='App'>
      <Dropdown title={title} options={options} callback={changeSelection} />
    </div>
  );
}

export default App;

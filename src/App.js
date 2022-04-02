import React, { useState, useCallback} from 'react';

import './App.css';
import DemoList from './Components/Demo/DemoList';
import Button from './Components/UI/Button/Button';

function App() {
  const listItems =  [5, 3, 1, 10, 9];
  const [listTitle, setListTitle] = useState('Un orderd List');
  const [NewOrderState, setOrderState] = useState(listItems);

  const sortAssendingHandler = useCallback(() => {
    const AssendingSortedList = listItems.sort((a, b) => a - b);
      console.log('Assending order List');
    setListTitle('Assending order List')
    setOrderState(AssendingSortedList);
  },[]);

  const sortDesendingHandler =useCallback( () => {
    const DessendingSortedList = listItems.sort((a, b) => b - a);
      console.log('Dessending order List');
    setListTitle('Dessending order List')
    setOrderState(DessendingSortedList);
  },[]);

  return (
    <div className="app">
      <DemoList title={listTitle} items={NewOrderState} />
      <Button onClick={sortAssendingHandler}>Assending Order</Button>
      <Button onClick={sortDesendingHandler}>Descending Order</Button>
    </div>
  );
}

export default App;
import './App.css';
import Item from './components/Item'
import Header from './components/Header';
import InputContainer from './components/InputContainer';
import ListContainer from './components/ListContainer';

import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([])

  function addItem(text){
    if(text === '') return

    let item = new Item(text)

    setItems([...items, item])
}

  useEffect(()=>{
    let savedItems = JSON.parse(localStorage.getItem('savedItems'))

    if(!savedItems) return

    if(savedItems.length === 0) return
    
    setItems(savedItems)
  }, [])

  useEffect(()=>{
    localStorage.setItem('savedItems', JSON.stringify(items));
  }, [items])


  function handleDeleteClick(id){
      let filteredItems = items.filter(item => item.id !== id)

      setItems(filteredItems)
  }

  function handleChangeDone(id){
      let changedItems = items.map(item =>{
        if(item.id === id){
          item.done = !item.done
        }
        return item
      })
      setItems(changedItems)
  }

  return (
    <div>
        <Header></Header>
        <InputContainer addItem={addItem}></InputContainer>
        <ListContainer items={items} handleChangeDone={handleChangeDone} handleDeleteClick={handleDeleteClick}></ListContainer>
    </div>
  );
}

export default App;

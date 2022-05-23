import './App.css';
import Header from './components/Header';
import InputContainer from './components/InputContainer';
import ListContainer from './components/ListContainer';

import { useEffect, useState } from 'react';

import { createStore } from 'redux'
import { Provider, useDispatch } from 'react-redux'
import listReducer from './reducer/listReducer';

function App() {
  function setState(state){
    localStorage.setItem('savedItems', JSON.stringify(state));
  }

  function loadState(){
    let savedItems = JSON.parse(localStorage.getItem('savedItems'))

    if(!savedItems) return []

    if(savedItems.length === 0) return []

    return savedItems
  }

  const store = createStore(listReducer, loadState())

  store.subscribe(()=>{
    setState(store.getState())
  })


  return (
    <div>
        <Header></Header>
        <Provider store={store}>
          <InputContainer></InputContainer>
          <ListContainer></ListContainer>
        </Provider>

    </div>
  );
}

export default App;

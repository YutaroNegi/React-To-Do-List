import './App.css';
import Header from './components/Header';
import InputContainer from './components/InputContainer';
import ListContainer from './components/ListContainer';

import store from './store'
import { Provider } from 'react-redux'

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

  store.subscribe(()=>{
      setState(store.getState)
  })
  console.log(store);

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

import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [likes, setLikes] = useState(0);

  function handleClickPlus()
  {
    setLikes(likes + 1);
  }
  
  function handleClickMinus()
  {
    setLikes(likes - 1);
  }

  function reset()
  {
    setLikes(0);
  }

  return (
    <div>
      <Header author="Fizar Rama Waluyo" />
      <button onClick={handleClickMinus}> - </button> 
      <span> {likes}  </span>
      <button onClick={handleClickPlus}> + </button> <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App

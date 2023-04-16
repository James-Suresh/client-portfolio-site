import Header from './Components/Header/Header';
import './App.scss';
import { useEffect, useState } from 'react';



function App() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);
  return (
    <div className="App">
      {(width>768) &&
      <Header/>
      }
      {(width<768) &&
      <h1>Sorry only desktop view is supported</h1>
      }
    </div>
  );
}

export default App;

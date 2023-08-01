import { useState } from 'react';
import Personnage from './components/personnage.component';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return <Personnage />;
}

export default App;

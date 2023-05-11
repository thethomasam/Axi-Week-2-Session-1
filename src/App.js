import logo from './logo.svg';
import './App.css';
import Dog from './dog';
import Bark from './bark'
import Counter from './counter'
function App() {
  return (
    <div className="App">
      <Dog />
      <Bark />
      <Counter onClick={handleIncrement} />
    </div>
  );
}

export default App;

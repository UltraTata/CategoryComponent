import './App.css';
import Category from './Category.js';

function App() {
  return (
    <div className="App">
      <div class="row">
        <Category color="red" quantity={50} object="películas">Netflix</Category>
        <Category color="skyblue" quantity={0} object="películas">Disney+</Category>
        <Category color="gold" quantity={1} object="películas" objectSingular="película">HBO+</Category>
        <Category color="violet" quantity={1} object="películas">Pluto TV</Category>
        <Category quantity={0} object="programas">Live TV</Category>
        <Category color="brown">Radio</Category>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import StarRating from './component/StarRating';


function App() {
  return (
    <div className="App">
      <StarRating numberOfStars={5}></StarRating>
    </div>
  );
}

export default App;

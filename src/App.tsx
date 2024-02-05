import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1>Assignment lists</h1>
      
      <Link to="timer">
        <button>
          Timer App
        </button>
      </Link>

      <Link to="weather">
        <button>
          Weather App
        </button>
      </Link>

      <Link to="form">
        <button>
          Activity Form App
        </button>
      </Link>

    </div>
  );
}

export default App;

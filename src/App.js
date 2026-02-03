import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import DebouncedInput from './components/DebouncedInput/DebouncedInput';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* filter users using debounce input and cache the filtered result so that it will not filter   */}
        <Route path="/" element={<DebouncedInput />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

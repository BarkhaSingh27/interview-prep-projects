import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import DebouncedInput from './components/DebouncedInput/DebouncedInput';
import ModalEventPropagation from './components/Modal/ModalEventPropagation';
import ModalWithRef from './components/Modal/ModalWithRef';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* filter users using debounce input and cache the filtered result so that it will not filter   */}
        <Route path="/" element={<DebouncedInput />} />

        {/* Modal with event propagation, when we click on overlay it will close the modal but when we click inside the modal it will not close the modal */}
        <Route path="/modal-evnt-propgn" element={<ModalEventPropagation />} />

        {/* Modal with ref, when we click on overlay it will close the modal but when we click inside the modal it will not close the modal */}
        <Route path="/modal-ref" element={<ModalWithRef />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

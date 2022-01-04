import './App.css';
import SignIn from './Pages/SignIn';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainContainer from './Pages/MainContainer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< SignIn/>} />
          <Route path="home" element={<MainContainer />} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;

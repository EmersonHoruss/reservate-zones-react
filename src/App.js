import './App.css';
import Provider from './context/Provider';
import Main from './pages/Main';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Provider>
       <Main/> 
      </Provider>
    </BrowserRouter>
  );
}

export default App;

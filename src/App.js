import Blank1 from "./components/Blank1";
import Blank2 from "./components/Blank2";
import StackedCards from "./components/StackedCards";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
     <BrowserRouter>
      <>
      <Blank1 />
      <StackedCards />
      <Blank2 />
      </>
      </BrowserRouter>
  );
    
    
}

export default App;

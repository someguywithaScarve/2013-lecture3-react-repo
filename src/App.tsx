import './App.css';
import DiamondContainer from "./Components/DiamondContainer";
import data from "./data/data";

function App() {
  return (
    <>
      <h1>DiamondDealer</h1>
      <DiamondContainer data={data}/>
    </>
  );
}

export default App;
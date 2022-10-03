import { Form } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";




function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/producto" element={<ItemList />} />
        <Route exact path="/producto/:id" element={<ItemDetail />} />
      </Routes>
    </div>
  );
}

export default App;

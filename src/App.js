import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Nav from "./Nav";
import reset from "./styles/reset.css"

function App() {

  return (
    <Routes>
      <Route element={<Nav />}>
      <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./components/ContentBar/Home";
import Search from "./components/ContentBar/Search/Search";
import Library from "./components/ContentBar/library/Library";
import MainScreen from "./components/ContentBar/mainscreen/MainScreen";
function App() {
  return (
    <div className="main">
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}>
            <Route path="/" Component={MainScreen}></Route>
            <Route path="/search" Component={Search}></Route>
            <Route path="/library" Component={Library}></Route>
        </Route>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

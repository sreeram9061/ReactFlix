import Layout from "./Components/Layout";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Movieinform from "./pages/Movieinform";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Favorite' element={<Favorite/>} />
          <Route path='/Movie/:id' element={<Movieinform/>} />
          <Route path='Favorite/Movie/:id' element={<Movieinform/>} />
        </Routes>
      </Layout>
    </div>
  )
}
export default App;
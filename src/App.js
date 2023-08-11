import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";

const Shop = () => {
  return <h1>Test shop</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;

import { BrowserRouter, Link, Route, Routes } from "react-router";
import Cards from "./components/pages/cards";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/cards/1">Link</Link>
        <br />
        <Routes>
          <Route path="/cards/:id" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

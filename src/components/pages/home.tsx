import { BrowserRouter, Link, Route, Routes } from "react-router";
import Cards from "./cards";
import Register from "./register";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cards/:id" element={<Cards />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/*"
          element={
            <div className="p-8">
              <ul>
                <li>
                  <Link className="text-3xl" to="/cards/sample_id">
                    cards
                  </Link>
                </li>
                <li>
                  <Link className="text-3xl" to="/register">
                    register
                  </Link>
                </li>
              </ul>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

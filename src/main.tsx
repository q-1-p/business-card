import "virtual:uno.css";
import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Cards from "./components/pages/cards";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/cards/:id" element={<Cards />} />
        </Routes>
        <Routes>
          <Route path="/*" />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);

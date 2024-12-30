import "virtual:uno.css";
import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/pages/home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  </StrictMode>
);

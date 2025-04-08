import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "modern-normalize";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Toaster
      containerClassName="toastMessage"
      toastOptions={{
        duration: 3000,
        style: {
          border: "1px solid #4d02b9",
          padding: "16px",
          color: "#000",
          maxWidth: "500px",
        },
      }}
    />
  </StrictMode>
);

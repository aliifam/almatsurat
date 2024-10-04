import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { ThemeContextProvider } from "./context/ThemeContext.tsx";
import { registerSW } from "virtual:pwa-register";

// add this to prompt for a refresh
registerSW({
  onNeedRefresh() {
    if (confirm("New version available! Refresh to update?")) {
      location.reload();
    }
  },
  onOfflineReady() {
    alert("No internet connection found. App is running in offline mode.");
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </HelmetProvider>
  </StrictMode>
);

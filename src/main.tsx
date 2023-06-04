import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import { App } from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <Suspense>
    <App />
  </Suspense>
);

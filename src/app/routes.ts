import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Donations } from "./pages/Donations";
import { Shop } from "./pages/Shop";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "sobre", Component: About },
      { path: "doacoes", Component: Donations },
      { path: "loja", Component: Shop },
      { path: "contato", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);

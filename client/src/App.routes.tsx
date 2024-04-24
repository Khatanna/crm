import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import { HomePage } from "./pages/HomePage";
import { AccountsPage } from "./pages/AccountsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/accounts",
        Component: AccountsPage,
      },
      {
        path: "/prices",
        Component: () => <div>Prices</div>,
      },
      {
        path: "/leads",
        Component: () => <div>Leads</div>,
      },
      {
        path: "/activities",
        Component: () => <div>Activities</div>,
      },
      {
        path: "/configuration",
        Component: () => <div>Configuration</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

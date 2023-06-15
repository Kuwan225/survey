import { RouterProvider, createBrowserRouter } from "react-router-dom";

import pages from "./pages";
import "./App.css";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter(pages);

const App = () => {
  return (
    <>
      <SnackbarProvider maxSnack={3} >
        <RouterProvider router={router} />
      </SnackbarProvider>
    </>
  );
};

export default App;

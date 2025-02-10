import Home from "./pages/home/Home";
import Root from "./pages/Root";
import Create from "./pages/create/Create";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { cyan, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
);

function App() {

  return (
   
    
      <RouterProvider router={router} />
  );
}

export default App;

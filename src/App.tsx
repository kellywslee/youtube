
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createBrowserRouter } from 'react-router-dom';
import Videos from "./pages/Videos";


const router = createBrowserRouter([{ path: "/", element: <Videos />}]);


function App() {
  return  return <RouterProvider router={router} />;
}

export default App;

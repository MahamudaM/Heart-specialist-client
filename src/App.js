
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/PublicRoutes/Routes';

function App() {
  return (
    <div className="App">
      {/* #2f2fA2 */}
     <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;

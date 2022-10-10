import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/topics', element: <h2>Topics</h2> },
        { path: '/statistics', element: <h2>statistics</h2> },
        { path: '/blog', element: <h2>blog</h2> },
        { path: '/about', element: <h2>about</h2> },
        { path: '*', element: <h2>404 Found</h2> }
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

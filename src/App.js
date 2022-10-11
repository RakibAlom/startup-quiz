import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Quiz from './components/QuizTopics/Quiz/Quiz';
import QuizTopics from './components/QuizTopics/QuizTopics';
import Main from './layouts/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/topics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <QuizTopics></QuizTopics>
        },
        {
          path: '/topics/:topicId',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
          element: <Quiz></Quiz>
        },
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

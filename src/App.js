import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Quiz from './components/QuizTopics/Quiz/Quiz';
import QuizTopics from './components/QuizTopics/QuizTopics';
import Statistics from './components/Statistics/Statistics';
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
        {
          path: '/statistics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          loader: () => fetch('./blogs.json'),
          element: <Blog></Blog>
        },
        { path: '/about', element: <About></About> },
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

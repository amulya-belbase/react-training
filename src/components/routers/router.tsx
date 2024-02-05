import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import TimerApp from '../timerApp';
import WeatherApp from '../weatherApp';
import FormApp from '../formApp';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "timer",
    element: <TimerApp/>,
  },
  {
    path: "weather",
    element: <WeatherApp/>,
  },
  {
    path: "form",
    element: <FormApp/>,
  },
]);


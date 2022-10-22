import Dashboard from './pages/dashboard/Dashboard';
import {Link, Route, Routes, Switch, useNavigate, BrowserRouter as Router} from 'react-router-dom'
import { Home } from './pages/home/Home'
import NotFoundPage from './pages/404/NotFoundPage';
import SideMenu from './pages/sideMenu/SideMenu';
import VideosPage from './routes/VideosPage';
import { Footer } from './pages/home/Footer';
import { steps } from './models/steps';


function App() {



  const routes = [
    {
      path: '',
      file: <Home/>
    },
    {
      path: '/page2',
      file: <VideosPage video={steps[0].video}/>
    }
  ]

  return (

      // we use <></> when we have to put chidren into it

    <Router>

            <Dashboard></Dashboard>

            <SideMenu></SideMenu>

                  <Routes>
                        <Route path={routes[0].path} element={routes[0].file}/>
                        <Route path={routes[1].path} element={routes[1].file}/>
                        <Route path={'/page3'} element={<VideosPage video={steps[1].video} />}/>
                        <Route path={'*'} element={<NotFoundPage/>}/>
                  </Routes>

              <Footer></Footer>
    </Router>


  );
}

export default App;

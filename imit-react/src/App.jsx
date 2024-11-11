

import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import { Homepages } from './pages/Homepages';
import Mainlayout from './Layout/Mainlayout';
import Loginlayout from './Layout/Loginlayout';
import Loginpage from './pages/Loginpage';


const router=createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path='/' element={<Mainlayout/>}>
      <Route index element={<Homepages/>} />
  </Route>
   <Route path='/login' element={<Loginlayout/>}>
   <Route index element={<Loginpage/>} />
</Route>
    </>
 
  )
);

const App = () => {
  return <RouterProvider router={router} />
}

export default App
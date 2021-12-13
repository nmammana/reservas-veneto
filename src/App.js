import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './styles/Reset.scss';
import './styles/Global.scss';

import Home from './pages/Home/Home';
import Error404 from './pages/Error404/Error404';
import Loading from './components/Loading/Loading';

export default function App() {
  return (
    <BrowserRouter>
        <Suspense fallback={<Loading />}> 
            <Routes> 
                <Route path="/" element={ <Home/> }/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </Suspense>
      </BrowserRouter>
  )
}

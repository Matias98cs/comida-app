import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ComidasProvider } from './context/ComidasProvider'
import React, { lazy, Suspense } from 'react'
import Layout from './layouts/Layout'
import Home from './paginas/Home'
import Pedidos from './paginas/Pedidos'
import Spinner from './componentes/spinner/Spinner'


const PruebaLayout = lazy(() => import('./layouts/Layout'))
const PruebaHome = lazy(() => import('./paginas/Home'))
const PruebaPedidos = lazy(() => import('./paginas/Pedidos'))

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner/>}>
        <ComidasProvider>
          <Routes>
            <Route path='' element={<PruebaLayout/>}>
              <Route path='/' element={<PruebaHome/>} />
              <Route path='/pedidos' element={<PruebaPedidos/>}/>
            </Route>
          </Routes>
        </ComidasProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

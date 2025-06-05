import DefaultLayouts from '../layouts/DefaultLayouts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import FilmPage from '../pages/FilmPage'
import NotFoundPage from '../pages/NotFoundPage'
import globalContext from './contexts/GlobalContext'
import { useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      <globalContext.Provider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayouts />}>
              <Route index element={<HomePage />}></Route>
              <Route path="/films/:id" element={<FilmPage />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </globalContext.Provider>
    </>
  )
}

export default App

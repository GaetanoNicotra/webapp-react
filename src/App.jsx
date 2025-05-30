import DefaultLayouts from '../layouts/DefaultLayouts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import FilmPage from '../pages/FilmPage'
import NotFoundPage from '../pages/NotFoundPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/films/:id" element={<FilmPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

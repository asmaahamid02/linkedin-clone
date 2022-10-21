import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthForm from './views/AuthForm'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthForm />} />
        <Route path='/signup' element={<AuthForm signup={true} />} />
        <Route element={<MainLayout />}>
          <Route path='/home' element={<>hello</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

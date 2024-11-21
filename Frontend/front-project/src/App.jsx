import './App.css'

import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './core/routes/AppRouter'
import { AuthProvider } from './core/auth/providers/AuthProvider'

function App() {


  return (
    <>
      <AuthProvider>
      <RouterProvider router={AppRouter}></RouterProvider>
      </AuthProvider>
    </>
  )
}

export default App

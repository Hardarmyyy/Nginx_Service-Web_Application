import { Outlet } from 'react-router-dom'
import Navigation from './Layouts/Navigation'
import './App.css'

function App() {

  return (
    <>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </>
  )
}

export default App

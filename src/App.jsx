import { Outlet } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 bg-[#F5F5F5] min-h-screen'>
       <Outlet />
      </div>
      </div>
  )
}

export default App
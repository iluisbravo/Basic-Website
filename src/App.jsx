import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import AccountPage from './pages/AccountPage'
import SettingsPage from './pages/SettingsPage'
import SidebarComponent from './components/SidebarComponent'
import { Bars3Icon } from '@heroicons/react/24/outline'


function App() {

  return (
    <div className="App">
      <div className='container'>
        <div className='col-2'>
          <div className='box logo'>
            <p className='logo-text'>
              Mi Marca
            </p>
          </div>
        </div>
        <div className='col-10'>
          <div className='box header'>
            <p>Header</p>
          </div>
        </div>
        <div className='col-2'>
          <SidebarComponent />
        </div>
        <div className='col-10'>
          <div className='container'>
            <Routes>
              <Route path='/Home' element={<HomePage />} />
              <Route path='/Dashboard' element={<DashboardPage />} />
              <Route path='/Account' element={<AccountPage />} />
              <Route path='/Settings' element={<SettingsPage />} />
            </Routes>
          </div>
        </div>
        <div className='col-2'>
        </div>
        <div className='col-10'>
          <div className='box footer'>
            <p>Footer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

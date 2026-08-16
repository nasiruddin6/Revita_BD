import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function MainLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-secondary-50">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

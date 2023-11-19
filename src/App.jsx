import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Destination from './components/Routes/Destination'
import Crew from './components/Routes/Crew'
import Technology from './components/Routes/Technology'

function App() {
  const location = useLocation()
  const isDestinationRoute = location.pathname.includes('destination')

  return (
    <div
      className={`min-h-screen ${
        isDestinationRoute
          ? 'bg-destination'
          : 'lg:bg-default-img md:bg-medium bg-mobile'
      } font-barlow bg-no-repeat w-full bg-cover `}
    >
      <div className="mx-auto flex flex-col md:justify-center  text-white gap-20">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination/*" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

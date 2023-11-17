import Home from './components/Home'
import Nav from './components/Nav'

function App() {
  return (
    <div className="min-h-screen bg-background font-barlow bg-no-repeat w-full bg-cover lg:bg-default-img md:bg-medium bg-mobile">
      <div className="mx-auto flex flex-col justify-between  md:justify-center  text-white gap-20">
        <Nav />
        <Home />
      </div>
    </div>
  )
}

export default App

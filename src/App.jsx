import Home from './components/Home'
import Nav from './components/Nav'

function App() {
  return (
    <div className=" min-h-screen  bg-background background-img font-barlow ">
      <div className=" mx-auto py-12 flex flex-col justify-between text-white gap-52">
        <Nav />
        <Home />
      </div>
    </div>
  )
}

export default App

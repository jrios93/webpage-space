import Home from './components/Home'
import Nav from './components/Nav'

function App() {
  return (
    <div className=" w-full min-h-screen my-auto  py-12 flex flex-col justify-between gap-2 text-slate-100 bg-background background-img ">
      <Nav />
      <Home />
    </div>
  )
}

export default App

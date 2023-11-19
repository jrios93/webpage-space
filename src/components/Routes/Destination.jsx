import { Routes, Route } from 'react-router-dom'
import Moon from '../subRoutes/Moon'
import SubNav from '../subRoutes/SubNav'
import Mars from '../subRoutes/Mars'
import Europa from '../subRoutes/Europa'
import Titan from '../subRoutes/Titan'

const Destination = () => {
  return (
    <div className=" flex flex-col  justify-between px-12 gap-2">
      <div className="text-3xl tracking-widest flex gap-6 items-center px-40 -mt-16 mb-12 ">
        <strong>01</strong>
        <span>PICK YOUR DESTINATION</span>
      </div>
      <div className=" flex justify-center items-center ml-[37rem] ">
        <SubNav />
      </div>

      <Routes>
        <Route path="moon" element={<Moon />} />
        <Route path="mars" element={<Mars />} />
        <Route path="europa" element={<Europa />} />
        <Route path="titan" element={<Titan />} />
      </Routes>
    </div>
  )
}

export default Destination

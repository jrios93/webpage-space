import { useEffect, useState } from 'react'
import { getDestinationData } from '../hooks/Data'

const Moon = () => {
  const [moonData, setmoonData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moonDestination = await getDestinationData('Moon')
        setmoonData(moonDestination)
      } catch (error) {
        console.error('Error fetching Moon data:', error)
      }
    }
    fetchData()
  }, [])

  if (!moonData) {
    return <div></div>
  }

  return (
    <div className="flex lg:flex-row md:flex-col md:items-center lg:justify-evenly items-start">
      <div className="lg:-mr-36 lg:-mt-32 md:mb-10 lg:mb-0 md:w-[35%] w-full -mr-0 -mt-0 ">
        <img src={'/assets/destination/image-moon.webp'} alt="Moon" />
      </div>

      <div className="lg:w-[20%] lg:px-2 md:w-[90%] w-full lg:-ml-64">
        <div className="flex flex-col gap-4 md:justify-center  md:items-center">
          <p className="text-5xl md:text-8xl lg:text-8xl uppercase font-bellefair lg:tracking-wide">
            {moonData.name}
          </p>
          <p className="text-lg md:text-lg lg:text-lg lg:text-left md:text-center font-light lg:tracking-normal lg:leading-loose mb-10  ">
            {moonData.description}
          </p>
          <hr className="bg-slate-400 opacity-20 lg:mb-4" />
          <div className="flex justify-start gap-20 uppercase tracking-widest md:mb-10">
            <div className="flex flex-col gap-2">
              <p className="text-md font-light text-slate-300">Av. Distance</p>
              <p className="text-xl font-bellefair">{moonData.distance}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-md font-light text-slate-300">
                Est. travel time
              </p>
              <p className="text-xl font-bellefair">{moonData.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Moon

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
    <div className="flex justify-evenly items-start">
      <div className="-mr-36 -mt-10">
        <img src={'/assets/destination/image-moon.webp'} alt="Moon" />
      </div>

      <div className="w-[20%]">
        <div className="flex flex-col gap-4">
          <p className="text-5xl md:text-8xl lg:text-8xl uppercase font-bellefair lg:tracking-wide">
            {moonData.name}
          </p>
          <p className="text-lg md:text-lg lg:text-2em lg:text-start font-light lg:tracking-normal lg:leading-loose mb-10 ">
            {moonData.description}
          </p>
          <hr className="bg-slate-400 opacity-20 mb-4" />
          <div className="flex justify-start gap-20 uppercase tracking-widest">
            <div className="flex flex-col gap-2">
              <p className="text-md font-light text-slate-300">Av. Distance</p>
              <p className="text-2xl font-bellefair">{moonData.distance}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-md font-light text-slate-300">
                Est. travel time
              </p>
              <p className="text-2xl font-bellefair">{moonData.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Moon

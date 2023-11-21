import { useEffect, useState } from 'react'
import { getDestinationData } from '../hooks/Data'
const Titan = () => {
  const [titanData, setTitanData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moonDestination = await getDestinationData('Titan')
        setTitanData(moonDestination)
      } catch (error) {
        console.error('Error fetching Moon data:', error)
      }
    }
    fetchData()
  }, [])

  if (!titanData) {
    return <div></div>
  }

  return (
    <div className="flex lg:flex-row md:flex-col md:items-center lg:justify-evenly items-start">
      <div className="lg:-mr-36 lg:-mt-32 md:mb-10 lg:mb-0 md:w-[35%] w-full -mr-0 -mt-0 ">
        <img src={'/assets/destination/image-titan.webp'} alt="Titan" />
      </div>

      <div className="lg:w-[20%] lg:px-2 md:w-[90%] w-full lg:-ml-64">
        <div className="flex flex-col gap-4 md:justify-center lg:items-start md:items-center">
          <p className="text-5xl md:text-8xl lg:text-8xl uppercase font-bellefair lg:tracking-wide">
            {titanData.name}
          </p>
          <p className="text-lg md:text-lg lg:text-lg lg:text-left md:text-center font-light lg:tracking-normal lg:leading-loose mb-10  ">
            {titanData.description}
          </p>
          <hr className="bg-slate-400 opacity-20 lg:mb-4" />
          <div className="flex justify-start gap-20 uppercase tracking-widest md:mb-10">
            <div className="flex flex-col gap-2">
              <p className="text-md font-light text-slate-300">Av. Distance</p>
              <p className="text-xl font-bellefair">{titanData.distance}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-md font-light text-slate-300">
                Est. travel time
              </p>
              <p className="text-xl font-bellefair">{titanData.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Titan

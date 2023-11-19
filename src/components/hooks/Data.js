// api.js

const fetchData = async jsonPath => {
  try {
    const response = await fetch(jsonPath)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const getDestinationData = async destinationName => {
  const jsonPath = '/data.json'

  try {
    const data = await fetchData(jsonPath)
    const destinationData = data.destinations.find(
      destination => destination.name === destinationName
    )

    return destinationData
  } catch (error) {
    throw error
  }
}
